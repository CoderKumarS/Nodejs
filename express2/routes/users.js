// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const mongoose = require('mongoose');
const plm =require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const userSchema = mongoose.Schema({
  username: String,
  password:String,
  secret:String
  // name: String,
  // age: Number,
  // subject:{
  //   type:Array,
  //   default:[]
  // },
  // date:{
  //   type:Date,
  //   default:Date.now()
  // }
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);