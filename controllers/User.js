const { User } = require("../model/schemaUser");

exports.signup = async (req, res) => {
  const { login } = req.body;
  const checkUser = await User.findOne({ login });

  if (!checkUser) {
    const user = new User({ login });
    user
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((reason) => {
        res.status(500).json({
          status: "error",
          message: reason,
        });
      });
  } else res.status(401).json({ message: "user alrady exist" });
};
exports.getUserInfo = async (req, res) => {
  const { idUser } = req.query;
  const userInfo = await User.findById(idUser);
  res.status(200).json(userInfo)
};
