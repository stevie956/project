  
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
const port = 3027;
// read json
app.use(express.json());
//use cors to read from chrome
app.use(cors());

app.use("/api/match", matchRouter);


app.listen(port, () => 
     console.log(`Darts port is listening at http://localhost:${port}`)
     );