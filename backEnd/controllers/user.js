const bcrypt = require("bcrypt");
const saltRounds = 11;

const User = require("../models/user");

/* _id로 유저 찾기
req.params => id: 유저의 _id
*/
exports.findById = async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id).exec();
    res.json(foundUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

/* 신규 유저 등록
req.body => {userId: 유저의 id, pwd: 비밀번호, userName: 유저 이름}
*/
exports.registerUser = async (req, res, next) => {
  // 등록된 유저가 있는지 확인
  const user = await User.findOne({ userId: req.body.userId }).exec();

  if (user === null) {
    // 등록된 유저가 없을 경우
    const userId = req.body.userId;
    const pwd = await bcrypt.hash(req.body.pwd, saltRounds);
    const userName = req.body.userName;

    const newUser = new User({
      userId,
      pwd,
      userName,
    });

    try {
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  } else {
    // 이미 등록된 유저가 있을 경우
    res.send("이미 등록된 ID입니다.");
  }
};
