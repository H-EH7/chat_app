const Chat = require("../models/chat");

/* 채팅방 _id로 메세지 불러오기
req.params => id: 채팅방 _id
*/
exports.findMessagesById = async (req, res, next) => {
  try {
    const foundMessages = await Chat.findById(req.params.id).messages;
    res.json(foundMessages);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

/* 새로운 채팅방
req.body => {users: [유저들의 _id]}
*/
exports.newChat = async (req, res, next) => {
  try {
    const users = [...req.body.users];
    const newChat = new Chat({
      users,
    });
    const savedChat = await newChat.save();
    res.json(savedChat);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

/* 메세지 보내기
req.body => {id: 유저의 _id, text: 보내는 메세지}
req.params => id: 채팅방 _id
*/
exports.sendMessage = async (req, res, next) => {
  const newMessage = {
    by: req.body.id,
    text: req.body.text,
    sendTime: new Date(),
  };
  const updatedMessage = await Chat.updateOne({ _id: req.params.id }, { $push: { messages: newMessage } });
  console.log(updatedMessage);
  res.send(updatedMessage);
};
