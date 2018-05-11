const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const alarmRoutes = require('./routes/api/alarms');
const logRoutes = require('./routes/api/logs');

const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/alarms', alarmRoutes);
app.use('/api/logs', logRoutes);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log('Server listening');
})