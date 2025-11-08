const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const verifyToken = require('../middleware/verifyToken');


if (
  !productController ||
  typeof productController.findAll !== 'function' ||
  typeof productController.findById !== 'function' ||
  typeof productController.create !== 'function' ||
  typeof productController.update !== 'function' ||
  typeof productController.delete !== 'function'
) {
  console.error('Invalid productController export:', productController);
  throw new Error('productController is missing expected functions. Check src/controllers/productController.js exports.');
}


router.get('/', productController.findAll);
router.get('/:id', productController.findById);


router.post('/', verifyToken, productController.create);
router.put('/:id', verifyToken, productController.update);
router.delete('/:id', verifyToken, productController.delete);

module.exports = router;
