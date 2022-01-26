const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.route('/')
    .get(postController.get)
    .post(postController.create)   
router.route('/:id')
    .get(postController.getById)
    .put(postController.update)
    .delete(postController.delete)

module.exports = router