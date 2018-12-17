const express = require('express');
const mysql = require('mysql');


const app = express();

const branchRoutes = require('./api/routes/branch_details');
app.use('/branch_details', branchRoutes);

module.exports = app;