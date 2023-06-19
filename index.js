const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/find", (req, res) => {
    let num = parseFloat(req.query.number);
    let ans = num*num;
    let msg = "Square = "+ans.toFixed(2);
    fs.appendFile("log.txt", msg + " " + new Date().toString()+ "\n" , (err) => {
        if(err) console.log(err);
    })
    res.json({"msg":msg})
});

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log("ready @5000")})
