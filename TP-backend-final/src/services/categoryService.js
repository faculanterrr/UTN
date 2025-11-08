const Category = require('../models/categoryModel');

const categoryService = {

  createCategory: async (data) => {
    const newCategory = new Category(data);
    return await newCategory.save();
  },

 
  getAllCategories: async () => {
    return await Category.find();
  },

 
  getCategoryById: async (id) => {
    return await Category.findById(id);
  },


  updateCategory: async (id, data) => {
    const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true }); // new: true devuelve el doc actualizado
    return updatedCategory;
  },

  
  deleteCategory: async (id) => {
    const result = await Category.findByIdAndDelete(id);
    return result;
  }
};

module.exports = categoryService;
