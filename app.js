const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger'); // Your swagger.js file
const app = express();

// Load configuration
const config = require('./config/detabaseConfig');

// console.log(config.mongoURI);
// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Middleware
app.use(express.json());

// Load feature routes
const authRoutes = require('./features/authentication/routes/authRoutes');
const profileRoutes = require('./features/profile/routes/profileRoutes');
const startupStoryRoutes = require('./features/StartupStory/routes/startupStoryRoutes');
const commentRoutes = require('./features/comment/routes/commentRoute');
const replyRoutes = require('./features/reply/routes/replyRoute');
// const productRoutes = require('./app/features/product/routes/productRoutes');

// // Use feature routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/startup-story', startupStoryRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/reply', replyRoutes);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
