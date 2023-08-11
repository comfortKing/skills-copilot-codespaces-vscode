// Create web server

// Import express
const express = require('express');
const { body, validationResult } = require('express-validator');

// Import controller
const commentsController = require('../controllers/commentsController');

// Create router
const router = express.Router();

// GET request for list of all Comment items
router.get('/', commentsController.comments_list);

// GET request for one Comment
router.get('/:id', commentsController.comments_detail);

// POST request for creating Comment
router.post('/', [
  body('comment', 'Comment must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('user', 'User must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('post', 'Post must not be empty.').trim().isLength({ min: 1 }).escape(),
], commentsController.comments_create_post);

// PUT request for updating Comment
router.put('/:id', [
  body('comment', 'Comment must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('user', 'User must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('post', 'Post must not be empty.').trim().isLength({ min: 1 }).escape(),
], commentsController.comments_update_put);

// DELETE request for deleting Comment
router.delete('/:id', commentsController.comments_delete);

// Export router
module.exports = router;