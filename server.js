const express = require("express");
const app = express();

app.listen(8000, ()=> {
    console.log("listening at port 8080");
})
app.get("/", (req, res)=> {
    res.send("Server is working");
})