const Product = require('../models/productModel');

const productService = {
 
  createProduct: async (data) => {
    const newProduct = new Product(data);
    return await newProduct.save();
  },


  getAllProducts: async () => {
    
    return await Product.find().populate('categoria', 'nombre descripcion');
  },

  
  getProductById: async (id) => {
    
    return await Product.findById(id).populate('categoria', 'nombre descripcion');
  },

 
  updateProduct: async (id, data) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true }).populate('categoria', 'nombre descripcion');
    return updatedProduct;
  },


  deleteProduct: async (id) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
  }
};

module.exports = productService;
