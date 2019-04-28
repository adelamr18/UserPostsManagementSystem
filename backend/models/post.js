const mongosoe = require("mongoose");

const postSchema = mongosoe.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: {type: String, required: true},
  creator :{type: mongosoe.Schema.Types.ObjectId, ref:"User" ,required:true}
});

module.exports = mongosoe.model('Post',postSchema);
