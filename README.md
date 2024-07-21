# BrajProperty Backend

This is the backend for the BrajProperty project. It provides a RESTful API for managing properties, user reviews, and contact messages. This backend is built with Node.js, Express, and MongoDB. It includes authentication and authorization for admin users using JWT and bcrypt.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [Routes](#routes)
- [Middleware](#middleware)
- [Controllers](#controllers)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/brajproperty-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd brajproperty-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:

    ```plaintext
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## Usage

### Admin Routes

- **Register Admin**: `POST /admin/register`
- **Login Admin**: `POST /admin/login`
- **Add Property**: `POST /admin/property`
- **Edit Property**: `PUT /admin/property/:id`
- **Delete Property**: `DELETE /admin/property/:id`

### Contact Us Routes

- **Send Contact Message**: `POST /contactus`

### Property Routes

- **Get Properties**: `GET /property`

### Review Routes

- **Add Review**: `POST /review`
- **Get Reviews**: `GET /review`

### User Routes

- **Register User**: `POST /user/register`
- **Login User**: `POST /user/login`

## Models

### Admin Model

```javascript
const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model('Admin', adminSchema);
