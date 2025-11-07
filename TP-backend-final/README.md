# RESTful API with CRUD and Service Layer

## Description
A robust RESTful API implementing CRUD operations with MongoDB, Express, and Node.js, following service layer architecture. This API provides endpoints for managing products and categories with authentication.

## Database Schema

### Products
```json
{
  "nombre": "String",
  "descripcion": "String",
  "precio": "Number",
  "stock": "Number",
  "categoria": "ObjectId (ref: Category)"
}
```

### Categories
```json
{
  "nombre": "String",
  "descripcion": "String"
}
```

### Users
```json
{
  "name": "String",
  "email": "String",
  "password": "String (hashed)"
}
```

## Technologies
- Node.js
- Express
- MongoDB & Mongoose
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables
- CORS enabled

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TP-backend-final
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file with required variables (see .env.example)

4. Run the server:
```bash
npm start
```

## API Endpoints

### Authentication
- POST /api/v1/auth/register - Register new user
- POST /api/v1/auth/login - Login user

### Products
- GET /api/v1/products - Get all products
- GET /api/v1/products/:id - Get product by ID
- POST /api/v1/products - Create new product (requires authentication)
- PUT /api/v1/products/:id - Update product (requires authentication)
- DELETE /api/v1/products/:id - Delete product (requires authentication)

### Categories
- GET /api/v1/categories - Get all categories
- GET /api/v1/categories/:id - Get category by ID
- POST /api/v1/categories - Create new category (requires authentication)
- PUT /api/v1/categories/:id - Update category (requires authentication)
- DELETE /api/v1/categories/:id - Delete category (requires authentication)

## Example Requests

### Register User
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Login
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Create Product
```json
{
  "nombre": "Laptop Gaming",
  "descripcion": "Laptop gaming de alta gama",
  "precio": 1299.99,
  "stock": 50,
  "categoria": "65481d7b9f1e8d3a2c0e4b5a"
}
```

### Create Category
```json
{
  "nombre": "Electronics",
  "descripcion": "Electronic devices and accessories"
}
```

## Authentication

The API uses JWT for authentication. To access protected routes:
1. First login to get the JWT token
2. Include the token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## Error Handling

The API includes comprehensive error handling:
- 400: Bad Request - Invalid input
- 401: Unauthorized - Invalid/missing token
- 403: Forbidden - Valid token but insufficient permissions
- 404: Not Found - Resource not found
- 500: Internal Server Error - Server-side issues

## Development

To run in development mode with hot reload:
```bash
npm run dev
```