💻 API RESTful con CRUD y Capa de Servicio
📝 Descripción
Una robusta API RESTful que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB, Express y Node.js, y siguiendo una arquitectura de capa de servicio. Esta API proporciona endpoints para la gestión de productos y categorías con autenticación de usuarios.

🏛️ Esquema de la Base de Datos
Productos
JSON

{
  "nombre": "String",
  "descripcion": "String",
  "precio": "Number",
  "stock": "Number",
  "categoria": "ObjectId (ref: Category)"
}
Categorías
JSON

{
  "nombre": "String",
  "descripcion": "String"
}
Usuarios
JSON

{
  "name": "String",
  "email": "String",
  "password": "String (hashed)"
}
🛠️ Tecnologías Utilizadas
Node.js

Express

MongoDB y Mongoose

JWT (JSON Web Tokens) para autenticación

bcrypt para el hashing de contraseñas

dotenv para variables de entorno

CORS habilitado

🚀 Instalación
Sigue estos pasos para levantar el proyecto localmente:

Clonar el repositorio:

Bash

git clone <url-del-repositorio>
cd TP-backend-final
Instalar dependencias:

Bash

npm install
Configurar el archivo .env: Crea un archivo llamado .env en la raíz del proyecto y añade las variables requeridas (consulta el archivo .env.example).

Ejecutar el servidor:

Bash

npm start
🗺️ Endpoints de la API
Autenticación (Rutas Públicas)
POST /api/v1/auth/register - Registra un nuevo usuario.

POST /api/v1/auth/login - Inicia sesión y devuelve un token.

Productos
GET /api/v1/products - Obtiene todos los productos.

GET /api/v1/products/:id - Obtiene un producto por su ID.

POST /api/v1/products - Crea un nuevo producto (requiere autenticación).

PUT /api/v1/products/:id - Actualiza un producto (requiere autenticación).

DELETE /api/v1/products/:id - Elimina un producto (requiere autenticación).

Categorías
GET /api/v1/categories - Obtiene todas las categorías.

GET /api/v1/categories/:id - Obtiene una categoría por su ID.

POST /api/v1/categories - Crea una nueva categoría (requiere autenticación).

PUT /api/v1/categories/:id - Actualiza una categoría (requiere autenticación).

DELETE /api/v1/categories/:id - Elimina una categoría (requiere autenticación).

💡 Ejemplos de Solicitudes
Registrar Usuario
JSON

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
Iniciar Sesión
JSON

{
  "email": "john@example.com",
  "password": "securepassword123"
}
Crear Producto
JSON

{
  "nombre": "Laptop Gaming",
  "descripcion": "Laptop gaming de alta gama",
  "precio": 1299.99,
  "stock": 50,
  "categoria": "65481d7b9f1e8d3a2c0e4b5a"
}
Crear Categoría
JSON

{
  "nombre": "Electronics",
  "descripcion": "Electronic devices and accessories"
}
🔑 Autenticación
La API utiliza JWT para la autenticación. Para acceder a las rutas protegidas:

Primero, inicia sesión para obtener el token JWT.

Incluye el token en el encabezado Authorization con el prefijo Bearer:

Authorization: Bearer <tu-token>
🛑 Manejo de Errores
La API incluye un manejo de errores completo con los siguientes códigos de estado:

400: Solicitud Incorrecta (Bad Request) - Entrada inválida.

401: No Autorizado (Unauthorized) - Token inválido o faltante.

403: Prohibido (Forbidden) - Token válido, pero permisos insuficientes.

404: No Encontrado (Not Found) - Recurso no encontrado.

500: Error Interno del Servidor (Internal Server Error) - Problemas del lado del servidor.

⚙️ Desarrollo
Para ejecutar la aplicación en modo desarrollo con recarga automática (hot reload):

Bash

npm run dev
