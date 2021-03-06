const router = require('express').Router();
const topicsRouter = require('./topics');
const articlesRouter = require('./articles');

const {
  getUserProfile,
  getAllUsers,
  putCommentVoteCount,
  deleteComment
} = require('../controllers/controllers');

router.use('/topics', topicsRouter);
router.use('/articles', articlesRouter);

router.route('/users/:username').get(getUserProfile);
router.route('/users').get(getAllUsers);
router.route('/comments/:comment_id')
  .put(putCommentVoteCount)
  .delete(deleteComment);

module.exports = router;