
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const apisignupRouter = require("./API/apisignup");
const apisigninrouter = require("./API/apilogin");
// const apiuserrouter = require("./API/apisuer");
// const apipostrouter = require("./API/apipost");
// const apigetpostrouter = require("./API/apigetpost");
// const apicmtstrouter = require("./API/apicmtst")
// const apisearchrouter = require("./API/apisearch")
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567", 
    database: "DEMO",
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});
app.use('/api/signup', apisignupRouter);
app.use('/api/login', apisigninrouter);
// app.use('/api/user', apiuserrouter);
// app.use('/api/poststatus',apipostrouter);
// app.use('/api/getpoststatus', apigetpostrouter);
// app.use('/api/cmtstudent',apicmtstrouter);
// app.use('/api/search',apisearchrouter)
app.listen(7000, () => {
    console.log("Server is listening");
});
