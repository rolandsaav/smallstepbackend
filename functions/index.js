const express = require("express");
const functions = require("firebase/functions");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/test", (req, res) => {
    res.send("Hooray");
})

functions.https
exports.app = functions.getFunctions(app);