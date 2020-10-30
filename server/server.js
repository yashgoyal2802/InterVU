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
// if(process.env.NODE_ENV ==='production'){
// const db = process.env.mongoURI;
// const db2 = process.env.mongoURI2;

// }
// else{
const db =require("./config/keys").mongoURI;
const db2 =require("./config/keys").mongoURI2;
//}
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

// if(process.env.NODE_ENV == 'production'||1){
  // app.use(express.static('client/build'));
  // app.get("*",(req, res)=>{
  //   res.sendFile(path.resolve(__dirname,"/client","build","index.html"));
  // })
  
// }
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
app.use("/api/subs", subs);
const port1 = process.env.PORT1 || 5001;
app.listen(port1, () => console.log(`Server up and running on port ${port1} !`));
