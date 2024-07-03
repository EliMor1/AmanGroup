require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const s3Routes = require('./src/routes/s3Routes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', s3Routes); // Use the new router for /s3 routes

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
