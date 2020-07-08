const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/users', async(req, res) => {
        const users = await User.find({});
        return res.status(200).send(users);
    }),

    app.get('/users/:email', async(req, res) => {
        const { email } = req.params;

        const user = await User.findOne({ email: email});

        if ( user ) {
            res.status(200).send(user)
        } else {
            return res.status(404).send("Not Found")
        }
    })
}