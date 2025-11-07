const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Asegúrate de tener instalado bcryptjs

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // CAMBIO: Usamos 'name' para coincidir con el frontend y el servicio
  name: { 
    type: String,
    required: true,
    trim: true,
  }
}, { timestamps: true });

// --- HOOK (Middleware) de Mongoose para hashear la contraseña ---
// Se ejecuta antes de guardar (save) el documento si la contraseña fue modificada
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// --- Método para comparar la contraseña durante el Login ---
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);