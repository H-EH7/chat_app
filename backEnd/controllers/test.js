exports.getRoot = (req, res, next) => {
  console.log("Hello!");
};

exports.postRoot = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const name = `${firstName} ${lastName}`;

  res.status(201).json({
    message: "POST 성공!",
    name: name,
  });
};
