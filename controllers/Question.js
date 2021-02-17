const { Question } = require("../model/schemaQuestion");
const { User } = require("../model/schemaUser");

exports.addQuetions = async (req, res) => {
  const { idUser } = req.query;
  const { title, publication } = req.body;
  if (title && publication) {
    const checkQuestion = await Question.findOne({ title });
    const user = await User.findById(idUser);
    if (!checkQuestion) {
      const question = new Question({
        title,
        publication,
        author: idUser,
        authorAvatar: user.avatar,
      });
      question
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
      await User.findByIdAndUpdate(idUser, {
        $push: { quetions: question._id },
      });
    } else res.status(401).json({ message: "question alrady exist" });
  } else res.status(400).json({ message: "Field empty" });
};
exports.getAllQuetions = async (req, res) => {
  const allQuetions = await Question.find();
  res.status(200).json(allQuetions);
};

exports.editQuetions = async (req, res) => {
  const { idQuestion } = req.query;
  const { title, publication } = req.body;
 const editQuetion = await Question.findByIdAndUpdate(idQuestion, {
    title,
    publication,
  },{returnOriginal:false});
  res.status(200).json(editQuetion)
};
exports.deleteQuetions = async (req, res) => {
  const {idQuestion} = req.query
  const data = await Question.findByIdAndDelete(idQuestion);
  res.status(200).json(data)
};
