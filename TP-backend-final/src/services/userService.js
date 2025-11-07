// src/services/userService.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const userService = {
  // CREATE USER (Registro)
  registerUser: async (data) => {
    const newUser = new User(data);
    // El hasheo se maneja automáticamente por el hook 'pre-save' del modelo
    return await newUser.save();
  },

  // LOGIN (Lógica de autenticación y generación de JWT)
  loginUser: async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) return null;

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return null;

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '1d' });

    return { token, userId: user._id, email: user.email };
  },

  // Obtener Usuario por ID (para uso interno o perfil)
  getUserById: async (id) => {
    return await User.findById(id).select('-password');
  }
};

module.exports = userService;