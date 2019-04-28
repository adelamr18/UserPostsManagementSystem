const mongosoe = require("mongoose");
const uniqueValidaor = require('mongoose-unique-validator');



const userSchema = mongosoe.Schema({
  email: { type: String, required: true , unique:true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidaor);

module.exports = mongosoe.model('User',userSchema);
