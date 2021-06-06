const router = require('express').Router();
const {
  //getAllThoughts,
 // getThoughtById,
  addThought,
  //updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/');
 // .get(getAllThoughts);

// /api/comments/<pizzaId>
router
  .route('/:userId');
//  .get(getThoughtById);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:userId/:thoughtId')
  .post(addThought)
 // .put(updateThought)
  .delete(removeThought);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router
  .route('/:userId/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
