const express = require('express');

//Routers to endpoints
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

//Init express app
const app = express();

//Enable incoming JSON data
app.use(express.json());

//  Endpoints & routers
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

module.exports = { app };
