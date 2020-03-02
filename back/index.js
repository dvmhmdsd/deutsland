const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Good morning sunshine!"));

// Connect to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(
    `Example app listening on port ${PORT}!`
));