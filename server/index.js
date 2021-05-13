const express = require('express');
var mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "database1"


});
db.connect((err) => {
    if (err) {
        console.log("error connecting")
        return
    }
    console.log("connection done")
})
app.listen(3002, () => {
    console.log("server is starting");
})

app.get('/getdata', (req, res) => {
    db.query("SELECT * FROM holidaylist", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})
app.get('/', (req, res) => {
    res.send("root page");
})



