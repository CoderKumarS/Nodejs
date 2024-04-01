var express = require('express');
var router = express.Router();
// for backend server connection and use
const userModel = require('./users');
// for passport authentication
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));
/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

/* flash message page. */
router.get('/login', function (req, res) {
  req.flash("age", 12);
  req.flash("name", "kumar");
  res.send('flash message');
});

//check flash
router.get('/checkflash', function (req, res) {
  console.log(req.flash("age"), req.flash("name"));
  res.send('check flash');
});

//cookie create
router.get('/cookie', function (req, res) {
  res.cookie("age", 25);
  res.send("cookie creates");
});

//cookie read
router.get('/readcookie', function (req, res) {
  console.log(req.cookies.age);
  res.send("cookie read");
});
//cookie delete
router.get('/deletecookie', function (req, res) {
  res.clearCookie("age");
  res.send("cookie delete");
});

//module, collection, schema and document
//create document
router.get('/create', async function (req, res) {
  const createdUser = await userModel.create({
    name: "Arun",
    username: "Sahani",
    age: 22,
    subject: ["cpp", "c", "R", "C#"]
  });
  res.send(createdUser);
});

//search all document
router.get('/alluser', async function (req, res) {
  const alluser = await userModel.find({ username: "kumar" });
  res.send(alluser);
});

//search all document incasesensitive
router.get('/allusercasesensitive', async function (req, res) {
  var regex = new RegExp("Kumar", "i");
  const alluser = await userModel.find({ username: regex });
  res.send(alluser);
});

//search particular document incasesensitive
router.get('/particularuserincasesensitive', async function (req, res) {
  var regex = new RegExp("^kUmAr$", "i");
  const alluser = await userModel.findOne({ username: regex });
  res.send(alluser);
});

//search all document categoires vise
router.get('/alluserCatVise', async function (req, res) {
  const alluser = await userModel.find({ subject: { $all: ["js"] } });
  res.send(alluser);
});

//search particular document 
router.get('/oneuser', async function (req, res) {
  const oneuser = await userModel.findOne({
    username: "Sujal"
  });
  res.send(oneuser);
});

//search datewise document 
router.get('/dateuser', async function (req, res) {
  var date1 = new Date('2024-02-10');
  var date2 = new Date('2024-02-11');
  const oneuser = await userModel.find({
    date: {
      $gte: date1,
      $lte: date2
    }
  });
  res.send(oneuser);
});

//search particular atribute existing one 
router.get('/existuser', async function (req, res) {
  const existuser = await userModel.find({
    subject: {
      $exists: true
    }
  });
  res.send(existuser);
});

//search particular atribute existing one 
router.get('/lenexistuser', async function (req, res) {
  let existuser = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: '$name' }, 0] },
        { $lte: [{ $strLenCP: $name }, 12] }
      ]
    }
  });
  res.send(existuser);
});

//delete particular document 
router.get('/deleteoneuser', async function (req, res) {
  const deleteoneuser = await userModel.findOneAndDelete({
    username: "Kumar"
  });
  res.send(deleteoneuser);
});

//create  session
router.get("/session", function (req, res) {
  req.session.name = "sujal";
  res.render('index', { title: 'Express' });
});

//check a session data
router.get("/checksession", function (req, res) {
  if (req.session.name === "sujal") {
    res.send("check console sujal is banned");
  } else {
    res.send("sujal is not banned");
  }
});

// remove and delete a session
router.get("/removeban", function (req, res) {
  req.session.destroy(function (error) {
    if (error) {
      throw error;
    }
    res.send("check console sujal is unbanned");
  });
});

// authentication using passport in local
router.get('/profile', isLoggedIn, function (req, res) {
  res.render("profile");
});

router.post('/register', function (req, res) {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });
  userModel.register(userData, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile');
      })
    })
});
router.post('/loginauthy', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function (req, res) { });
router.get('/logout', function (req, res, next) {
  res.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
function isLoggedIn(req,res,next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}
module.exports = router;
