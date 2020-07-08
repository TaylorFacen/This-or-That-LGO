const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
    answer: String
})

const questionSchema = new Schema({
    question: String,
    answerChoices: [answerSchema]
})

const userAnswerSchema = new Schema({
    questionId: {type: Schema.Types.ObjectId, ref: 'questionSchema'},
    answerId: {type: Schema.Types.ObjectId, ref: 'answerSchema'}
})

const userSchema = new Schema({
    email: String,
    userName: String,
    answers: [userAnswerSchema]
})

mongoose.model('users', userSchema)
mongoose.model('userAnswers', userAnswerSchema)
mongoose.model('questions', questionSchema)
mongoose.model('answers', answerSchema)