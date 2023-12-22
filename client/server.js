const express = require('express');
const app = express();
const port = 3001;



// start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
