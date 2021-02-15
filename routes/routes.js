const route = require("express").Router();
const question = require("../controllers/Question");
const user = require("../controllers/User");
//questions
route.get("/questions", question.getAllQuetions);
route.post("/add-question", question.addQuetions);
route.post("/edit-question", question.editQuetions);
route.delete("/delete-question", question.deleteQuetions);

//users
route.post("/signup", user.signup);
route.get("/get-user-info", user.getUserInfo);

module.exports = route;
