const express = require('express'); // Requiring the 'express' package.
const app = express(); // Creating the express application. Contains all the underlying utility functions.


const PORT = process.env.PORT || 3000; // Use the dynamically defined port or development port.
// 'get' call
// '/' is the root route.
app.get('/', (req, res) => {
  //'req' represents the incoming request object.
  //'res' represents the outgoing response object.
  res.send({hi: 'world'});
});

app.listen(PORT);
