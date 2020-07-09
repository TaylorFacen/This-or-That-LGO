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
    }),

    app.get('/api/addClassmates', async(req, res) => {
        const lgoClass = [
            {userName: 'Tyler', email: 'tegglest@mit.edu'},
            {userName: 'Yu', email: 'yu_h@mit.edu'},
            {userName: 'Anjali', email: 'anjalik@mit.edu'},
            {userName: 'Andrew M.', email: 'amikk@mit.edu'},
            {userName: 'Felipe', email: 'felipeq@mit.edu'},
            {userName: 'Connor', email: 'cstehr@mit.edu'},
            {userName: 'Christian', email: 'caallins@mit.edu'},
            {userName: 'Luke C.', email: 'lcchiang@mit.edu'},
            {userName: 'Kristina M.', email: 'mentonkr@mit.edu'},
            {userName: 'Jeffrey', email: 'millerjw@mit.edu'},
            {userName: 'Kunal', email: 'kunalsan@mit.edu'},
            {userName: 'Stephanie', email: 'shs@mit.edu'},
            {userName: 'Chris C.', email: 'ccubra@mit.edu'},
            {userName: 'Alex M.', email: 'armuller@mit.edu'},
            {userName: 'Mariko', email: 'marioga@mit.edu'},
            {userName: 'Nicholas', email: 'npage@mit.edu'},
            {userName: 'Colin', email: 'cpoler@mit.edu'},
            {userName: 'Paige', email: 'paigew@mit.edu'},
            {userName: 'Michael', email: 'mlunny@mit.edu'},
            {userName: 'Christina M.', email: 'ckm2022@mit.edu'},
            {userName: 'Lois', email: 'loisn@mit.edu'},
            {userName: 'Amit', email: 'amgalg@mit.edu'},
            {userName: 'Sean', email: 'seano@mit.edu'},
            {userName: 'Ben', email: 'bsidell@mit.edu'},
            {userName: 'Philipp', email: 'psimons@mit.edu'},
            {userName: 'Daniel', email: 'dborchik@mit.edu'},
            {userName: 'Austin', email: 'demaille@mit.edu'},
            {userName: 'Taylor', email: 'tfacen@mit.edu'},
            {userName: 'Grant', email: 'ghosinsk@mit.edu'},
            {userName: 'Hunjoo', email: 'hunjoo@mit.edu'},
            {userName: 'Sravani', email: 'sravaniy@mit.edu'},
            {userName: 'Jennifer', email: 'amlanij@mit.edu'},
            {userName: 'Ken', email: 'groszman@mit.edu'},
            {userName: 'Alexandra H.', email: 'anhardin@mit.edu'},
            {userName: 'Tamir', email: 'tamirp@mit.edu'},
            {userName: 'Andrew T.', email: 'atresans@mit.edu'},
            {userName: 'Stephen', email: 'wendorf@mit.edu'},
            {userName: 'Inigo', email: 'palacioi@mit.edu'},
            {userName: 'Elizabeth', email: 'ehhau@mit.edu'},
            {userName: 'Luke H.', email: 'l_r_h@mit.edu'},
            {userName: 'Wren', email: 'wjiang17@mit.edu'},
            {userName: 'Andrew T.', email: 'atindall@mit.edu'},
            {userName: 'Lampros', email: 'lamprost@MIT.EDU'},
            {userName: 'Gustavo', email: 'gcastill@mit.edu'},
            {userName: 'Michelle', email: 'mfeole@mit.edu'},
            {userName: 'Ori', email: 'orihoxha@mit.edu'},
            {userName: 'Timothy', email: 'tlivings@mit.edu'},
            {userName: 'Lauren', email: 'lsakerka@mit.edu'},
            {userName: 'Pranav', email: 'pvangala@mit.edu'}
        ]

        const addPromise = lgoClass.map(classmate => User.create(classmate))
        Promise.all(addPromise)
        .then(() => res.status(201).send("OK"))
    })
}