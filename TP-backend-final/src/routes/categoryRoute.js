const express = require('express');
const router = express.Router(); 
const categoryController = require('../controllers/categoryController.js');
const verifyToken = require('../middleware/verifyToken.js')


router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findById);


router.post('/', verifyToken, categoryController.create);
router.put('/:id', verifyToken, categoryController.update);
router.delete('/:id', verifyToken, categoryController.delete);

module.exports = router;
