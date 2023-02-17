const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6000;

app.use(express.json());




app.get("/", (req,res) => {
    res.send("hello work");
})
app.get("/register", (req,res) => {
    const config = {
        header: {"Access-Control-Allow-Origin" : "*"}
    }
    res.sendFile("C:/kos/pos/server.js",config);

})

app.listen(PORT,() => {
    console.log("Running on the port");
})