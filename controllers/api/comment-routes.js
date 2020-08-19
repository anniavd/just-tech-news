const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//show all comments
router.get('/', (req, res) => {
 Comment.findAll({})
 .then(dbGetData => res.json(dbGetData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});



//create a comments
router.post('/',withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});



//delete a comments 
router.delete('/:id',withAuth, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbDeleteData => {
          if (!dbDeleteData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbDeleteData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});









module.exports = router;