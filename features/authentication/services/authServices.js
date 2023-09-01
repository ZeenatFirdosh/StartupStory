// features/authentication/services/authService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../../config/appConfig'); // Import your configuration
const User = require('../models/userModel');
const Profile = require('../../profile/models/profileModel')
exports.registerUser = async (userData) => {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('Email already in use');

        }

        const newUser = new User({
            email: userData.email,
            password: userData.password,

        });

        const profile = Profile({ 'firstName': userData.firstName, 'lastName': userData.lastName, 'userId': newUser._id });

        profile.save();
        newUser.profileId = profile._id;
        return newUser.save();
    } catch (error) {
        throw error;
    }
};

exports.loginUser = async (loginData) => {
    try {
        const user = await User.findOne({ email: loginData.email });
        if (!user) {
            throw new Error('User not found');
        }


        const isPasswordValid = await user.comparePassword(loginData.password)
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });

        return { 'token': token, 'user': user };
    } catch (error) {
        throw error;
    }
};


exports.changeUserPassword = async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await user.comparePassword(oldPassword);
    if (!isPasswordValid) {
        throw new Error('Invalid old password');
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();
};