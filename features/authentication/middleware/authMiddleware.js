// features/authentication/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../../../config/appConfig'); // Import your configuration

module.exports = (req, res, next) => {
    try {
        // Get the token from the "Authorization" header
        const token = req.headers.authorization.split(' ')[1]; // Assuming token is sent in header as "Bearer <token>"

        // Verify the token using your secret key
        const decodedToken = jwt.verify(token, config.jwtSecret);

        // Attach the decoded user information to the request
        req.userData = { userId: decodedToken.userId };

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
};
