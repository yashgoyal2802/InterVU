const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const SubsSchema = new Schema({
    numberOfTechnicalRounds: {
    type: Number,
    required: true,
  },
  numberOfNonTechnicalRounds: {
    type: Number,
    required: true,
  },
  AverageDuration: {
    type: String,
    required: true,
  },
  YourExpericence: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});
module.exports = User = mongoose.model("subs", SubsSchema);
