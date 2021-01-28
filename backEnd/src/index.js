const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const matchRouter = require("./routes/matchRoutes");

mongoose.connect("mongodb://localhost:27017/dartsScoreboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Initialise app object
const app = express();
// app port
const port = 3207;
// read json
app.use(express.json());
//use cors to read from chrome
app.use(cors());

app.use("/match", matchRouter);


app.listen(port, () => 
     console.log(`Fruit app is listening at http://localhost:${port}`)
     );