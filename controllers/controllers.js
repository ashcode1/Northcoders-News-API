/* eslint-disable no-console */

const { Users, Comments, Topics, Articles } = require('../models/models');

exports.getAllTopics = (req, res, next) => {
  Topics.find({}, (err, topics) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ topics: topics });
  });
};

exports.getArticlesByTopic = (req, res, next) => {
  const topic = req.params.topic_title;
  Articles.find({ belongs_to: topic }, (err, articles) => {
    if (!articles.length) {
      return next({status: 404, message: 'Topic not found'});
    }
    if (err) {
      return next(err);
    }
    res.json({articles});
  });
};

exports.getAllArticles = (req, res, next) => {
  Articles.find({}, (err, articles) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ articles: articles });
  });
};

exports.getArticle = (req, res, next) => {
  const articleId = req.params.article_id;
  let article;
  Articles.findById(articleId)

    .then((articleDoc) => {
      if (articleDoc === null) {
        return next ({ status: 404, message: 'Article not found'});
      }
      article = articleDoc.toObject();   
      return Users.findOne({ username: article.created_by }); 
    })

    .then((user) => {
      return Object.assign({}, article, {
        avatar_url: user.avatar_url
      });
    })

    .then((article) => {

      res.status(200).json({
        article
      });
    })

    .catch((err) => {
      res.status(500).json({ err });
    });
};

exports.getAllCommentsForArticle = (req, res, next) => {
  const id = req.params.article_id;
  Comments.find({ belongs_to: id }, (err, comments) => {
    if (!comments.length) {
      return next({status: 404, message: 'Comment not found'});
    }
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
};

exports.postNewCommentToArticle = (req, res) => {
  const id = req.params.article_id;
  var comment = new Comments();
  comment.body = req.body.comment;
  comment.belongs_to = id;

  comment
    .save()
    .then((comment) => {
      res.status(201).json({comment});
    })
    .catch(console.log);  
};

exports.getAllUsers = (req, res, next) => {
  Users.find({}, (err, users) => {
    if (!users.length) {
      return next({status: 404, message: 'Users not found'});
    }
    if (err) {
      return next(err);
    }
    res.json({users});
  });
};

exports.getUserProfile = (req, res, next) => {
  const username = req.params.username;
  Users.findOne({ username: username }, (err, user) => {
    if (!user.length) {
      return next({status: 404, message: 'User not found'});
    }
    if (err) {
      return next(err);
    }
    res.json(user);
  });
};

exports.putVoteCount = (req, res, next) => {
  const query = req.query.vote;
  const id = req.params.article_id;
  let inc;
  if (query === 'up') inc = 1;
  if (query === 'down') inc = -1;

  Articles.findByIdAndUpdate(
    id,
    { $inc: { votes: inc } },
    { new: true },
    (err, article) => {
      if (err) {
        return next(err);
      }
      res.json({ message: article.votes });
    }
  );
};

exports.putCommentVoteCount = (req, res, next) => {
  const query = req.query.vote;
  const id = req.params.comment_id;
  let inc;
  if (query === 'up') inc = 1;
  if (query === 'down') inc = -1;

  Comments.findByIdAndUpdate(
    id,
    { $inc: { votes: inc } },
    { new: true },
    (err, comment) => {
      if (err) {
        return next(err);
      }
      res.json({ message: comment.votes });
    }
  );
};

exports.deleteComment = (req, res, next) => {
  const id = req.params.comment_id;
  Comments.findByIdAndRemove(id, err => {
    if (err) {
      return next(err);
    }
    res.json({message: 'Your comment has been deleted.'});
  });
};