const { Schema, model } = require("mongoose")

const modelQuestions = new Schema({
    title: {
        type: String,
        // require: true
    },
    publication: {
        type: String,
        // require: true,
    },
    comment: {
        type: Array,
    },
    author: {
        type: Schema.Types.ObjectId, ref:"User"
    }
})
const Question = model("Question", modelQuestions)

module.exports = {Question}