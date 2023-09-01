// features/authentication/controllers/authController.js

const authService = require('../services/authServices');

exports.registerUser = async (req, res, next) => {
    try {
        const newUser = await authService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const userData = await authService.loginUser(req.body);
        res.json({ userData });
    } catch (error) {
        next(error);
    }
};

exports.logoutUser = (req, res) => {
    // Perform any necessary logout actions
    res.status(200).json({ message: 'Logged out successfully' });
};

exports.refreshToken = (req, res, next) => {
    try {
        // Get the user ID from the decoded token attached to the request
        const userId = req.userData.userId;

        // Generate a new token with the same user ID
        const newToken = jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });

        res.json({ token: newToken });
    } catch (error) {
        next(error);
    }
};


exports.changePassword = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const { oldPassword, newPassword } = req.body;
        await authService.changeUserPassword(userId, oldPassword, newPassword);
        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        next(error);
    }
};