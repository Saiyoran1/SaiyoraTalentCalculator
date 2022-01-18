require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dbURL = process.env.ATLAS_URL;
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(dbURL)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

const abilityRouter = require('./routes/abilities');
app.use('/abilities', abilityRouter);

app.listen(port, () => console.log('app listening'));