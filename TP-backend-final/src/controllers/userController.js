const userService = require('../services/userService');

const userController = {
  register: async (req, res) => {
    try {
      const newUser = await userService.registerUser(req.body);
      const { password, ...userData } = newUser.toObject();
      return res.status(201).json({ message: 'Usuario registrado exitosamente.', user: userData });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ message: 'El email ya está registrado.' });
      }
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: 'Datos de registro inválidos.', error: error.message });
      }
      return res.status(500).json({ message: 'Error al registrar el usuario.', error: error.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Se requieren email y contraseña.' });
    }

    try {
      const authResult = await userService.loginUser(email, password);
      if (!authResult) return res.status(401).json({ message: 'Credenciales inválidas.' });

      return res.status(200).json({
        message: 'Inicio de sesión exitoso.',
        token: authResult.token,
        userId: authResult.userId,
        email: authResult.email,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Error interno del servidor durante el login.', error: error.message });
    }
  }
};

module.exports = userController;