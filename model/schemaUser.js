const { Schema, model } = require("mongoose");

const modelUsers = new Schema({
  login: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  quetions: {
    type: [Schema.Types.ObjectId, Array],
    ref: "User",
    
  },
});
const User = model("User", modelUsers);

module.exports = { User };
