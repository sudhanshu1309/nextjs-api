const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
  },
});

// userSchema
//   .virtual("password")
//   .get(function () {})
//   .set(function () {});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
