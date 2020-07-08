const mongoose = require('mongoose');
const User = mongoose.model('users');
const Question = mongoose.model('questions')

module.exports = app => {
    app.get('/api/users', async(req, res) => {
        const users = await User.find({});
        return res.status(200).send(users);
    }),

    app.get('/api/users/:email', async(req, res) => {
        const { email } = req.params;

        const user = await User.findOne({ email: email});

        if ( user ) {
            res.status(200).send(user)
        } else {
            return res.status(404).send("Not Found")
        }
    }),

    app.get('/api/questions', async(req, res) => {
        const questions = await Question.find({})
        return res.status(200).send(questions);
    }),

    app.post('/api/users/:userId/answers', async(req, res) => {
        const { userId } = req.params;
        const { questionId, answerId } = req.body;

        User.findByIdAndUpdate(
            userId,
            { "$addToSet": {
                answers: {
                    questionId: questionId,
                    answerId: answerId
                }
            }}
        )
        .then(() => res.status(201).send("OK"))
    })
}