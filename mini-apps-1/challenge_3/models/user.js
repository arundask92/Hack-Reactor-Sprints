const mongoose = require("mongoose");

// const addressSchema = new mongoose.Schema({
//   street: String,
//   city: String,
//   state: String,
//   zipCode: Number,
//   phone: Number
// });

// const cardSchema = new mongoose.Schema({
//   cardNumber: Number,
//   expiration: Number,
//   cvv: Number,
//   cardZip: Number
// });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // address: addressSchema,
  // card: cardSchema
  street: String,
  city: String,
  state: String,
  zipCode: String,
  phone: String,
  cardNumber: String,
  expiration: String,
  cvv: String,
  cardZip: String
});

module.exports = mongoose.model("User", userSchema);
