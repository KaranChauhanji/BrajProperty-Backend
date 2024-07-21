# BrajProperty Backend

This is the backend for the BrajProperty project. It provides a RESTful API for managing properties, user reviews, and contact messages. This backend is built with Node.js, Express, and MongoDB. It includes authentication and authorization for admin users using JWT and bcrypt.

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
- **Add Property**: `POST /admin/property/add`
- **Edit Property**: `PUT /admin/property/edit/:id`
- **Delete Property**: `DELETE /admin/property/delete/:id`

### Contact Us Routes

- **Send Contact Message**: `POST /contact`

### Property Routes

- **Get Properties**: `GET /property`

### Review Routes

- **Add Review**: `POST /review/add`
- **Get Reviews**: `GET /review`

### User Routes

- **Register User**: `POST /user/register`

