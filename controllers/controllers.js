const { Users, Comments, Topics, Articles } = require('../models/models');

exports.getAllTopics = (req, res) => {
    Topics.find({}, (err, topics) => {
       if (err) return res.status(500).send('error');
       res.status(200).json({topics: topics});
    })
};