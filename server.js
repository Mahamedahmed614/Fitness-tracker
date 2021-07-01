const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//mongo db connection
app.use(express.static('public'));
const url = "mongodb://localhost/workout";
mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
