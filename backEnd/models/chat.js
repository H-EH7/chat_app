const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema({
  users: [{ type: ObjectId, required: true }],
  messages: [
    {
      by: { type: String, required: true },
      text: { type: String, required: true },
      sendTime: { type: Date, required: true, default: Date.now() },
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
