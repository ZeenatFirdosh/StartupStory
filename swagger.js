// swagger.js

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Your API Documentation',
            description: 'Description of your API endpoints',
            version: '1.0.0',
        },
    },
    apis: ['./features/authentication/routes/authRoutes.js'], // Replace with the path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
