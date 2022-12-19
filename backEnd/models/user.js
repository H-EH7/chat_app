const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  pwd: { type: String, required: true },
  userName: { type: String, required: true },
  friendsList: [{ type: ObjectId }],
  chatsList: [
    {
      chatId: { type: ObjectId, required: true },
      updateTime: { type: Date, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
