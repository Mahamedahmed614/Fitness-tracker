const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const host = '0.0.0.0';
const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//mongo db connection
app.use(express.static('public'));
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, host, () => {console.log(`App running on port ${PORT}!`);
});
