//This file contains the listener and http routes

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const challengeController = require("./challengeController.js");
app.use(express.urlencoded({ extended: true }));
app.post('/', async (req, res) => {
    const challengeController1 = new challengeController();
    const response = await challengeController1.getRecords(req);
    res.send(response);
});
app.listen(port, () => console.log(`GetirChallenge listening at http://localhost:${port}`));