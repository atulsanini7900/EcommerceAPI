

# eCommerce API
This is an API for an eCommerce platform to manage product inventory.

# Tech Stack
Node.js
MongoDB
# Folder Structure
- eCommerce API
  - controllers
    - productController.js
  - models
    - productModel.js
  - routes
    - productRoutes.js
  - index.js
  - package-lock.json
  - package.json
    


# Installation
Clone the repository to your local machine:



git repository Link : https://github.com/atulsanini7900/EcommerceAPI

host Link: https://atulsanini7900.github.io/EcommerceAPI/

# Navigate to the project directory:
cd eCommerce-api
# Install the dependencies using npm:
npm install

# Set up the MongoDB database:

Make sure MongoDB is installed and running on your local machine.
Create a new database for the project.
Configure the database connection:

Rename the .env.example file to .env.
Update the MONGODB_URI in the .env file with your MongoDB connection URI.
# Start the server:
npm start

The server should now be running on http://localhost:8006.

# Usage
You can use an API testing tool like Postman to interact with the eCommerce API.

Create a product:

Endpoint: POST /products/create
Request body example:
# json
Copy code
{  
  id: 1
  "name": "laptop",
  "quantity": 10
}
# Get products:

Endpoint: GET /products
# Delete a product:

Endpoint: DELETE /products/:id
Update the quantity of a product:

Endpoint: POST /products/:id/update_quantity/?number=10
Please refer to the API documentation for more details on each endpoint.

# Contributing
Contributions are welcome! If you find any issues or have any improvements, feel free to open a pull request.

# License
This project is licensed under the ISC License.

Feel free to customize this README file based on your specific project needs. It should provide a brief overview of the project, installation instructions, usage examples, and any additional information relevant to running and contributing to the project.

Remember to include the appropriate license for your project and any necessary credits or acknowledgments.

I hope this helps you create a README file for your eCommerce API project! Let me know if you need any further assistance.
