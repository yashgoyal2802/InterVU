const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const subs = require("./routes/api/subs");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.json());
// DB Config
const db = process.env.mongoURI||require("./config/keys").mongoURI;
const db2 = process.env.mongoURI2||require("./config/keys").mongoURI2;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology:true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
mongoose
  .connect(db2, { useNewUrlParser: true,useUnifiedTopology:true })
  .then(() => console.log("MongoDB2 successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

if(process.env.NODE_ENV ==='production'){
  
}
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
app.use("/api/subs", subs);
const port1 = process.env.PORT1 || 5001;
app.listen(port1, () => console.log(`Server up and running on port ${port1} !`));
