const { Question } = require("../model/schemaQuestion");
const { User } = require("../model/schemaUser");

exports.addQuetions = async (req, res) => {
  const {idUser} = req.query
  const { title, publication } = req.body;
  const checkQuestion = await Question.findOne({ title });

  if (!checkQuestion) {
    const question = new Question({ title, publication, author: idUser });
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
      await User.findByIdAndUpdate(idUser, {$push: {quetions:question._id}})
  } else res.status(401).json({ message: "question alrady exist" });
};
exports.getAllQuetions = async (req, res) => {
  const allQuetions = await Question.find();
  res.status(200).json(allQuetions);
};

exports.editQuetions = async (req, res) => {
  const { questionId } = req.query;
  const { title, publication } = req.body;
  await Question.findByIdAndUpdate(questionId, {
    title,
    publication,
  });
};
exports.deleteQuetions = async (req, res) => {
  await Question.findByIdAndDelete(questionId);
};
