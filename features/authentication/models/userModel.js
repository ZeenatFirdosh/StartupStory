// features/authentication/models/user.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },


    password: { type: String, required: true },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: false,
        unique: true,
    },
    // other user fields...
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }

        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

// Helper method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};

module.exports = mongoose.model('User', userSchema);
