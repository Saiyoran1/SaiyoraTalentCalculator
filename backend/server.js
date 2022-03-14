require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const db = require('./config/dbSetup');

const gameRouter = require('./routes/abilities');
app.use('/game', gameRouter(db));

app.listen(port, () => console.log('app listening'));