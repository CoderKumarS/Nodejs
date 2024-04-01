const express = require('express');
const app = express();
const port = 3000;
// middleware function
app.use((req, res, next)=>  {
  console.log("This is middleware function");
  next();
});
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
