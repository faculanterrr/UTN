
const categoryService = require('../services/categoryService');

const categoryController = {
  
  create: async (req, res) => {
    try {
      const newCategory = await categoryService.createCategory(req.body);
      return res.status(201).json(newCategory); 
    } catch (error) {
     
      return res.status(400).json({ message: 'Error al crear la categoría.', error: error.message });
    }
  },

  
  findAll: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: 'Error interno del servidor.', error: error.message });
    }
  },


  findById: async (req, res) => {
    try {
      const category = await categoryService.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }
      return res.status(200).json(category);
    } 
    catch (error) {
      return res.status(400).json({ message: 'ID de categoría inválido.', error: error.message });
    }
  },

  
  update: async (req, res) => {
    try {
      const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Categoría no encontrada para actualizar.' });
      }
      return res.status(200).json(updatedCategory);
    } catch (error) {
      return res.status(400).json({ message: 'Error al actualizar la categoría.', error: error.message });
    }
  },

 
  delete: async (req, res) => {
    try {
      const result = await categoryService.deleteCategory(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Categoría no encontrada para eliminar.' });
      }
      
      return res.status(204).send(); 
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar la categoría.', error: error.message });
    }
  }
};

module.exports = categoryController;