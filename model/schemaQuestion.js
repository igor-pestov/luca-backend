const { Schema, model, now } = require("mongoose")

const modelQuestions = new Schema({
    title: {
        type: String,
    },
    publication: {
        type: String,
    },
    comment: {
        type: Array,
    },
    author: {
        type: Schema.Types.ObjectId, ref:"User"
    },
    authorAvatar: {
        type: String
    },
    created: {
        type:  Date,
        default: Date.now,
        require: true,
    }
})
const Question = model("Question", modelQuestions)

module.exports = {Question}