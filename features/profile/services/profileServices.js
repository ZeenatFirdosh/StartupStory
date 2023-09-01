// features/user/controllers/profileServices.js

const Profile = require('../models/profileModel');

exports.getProfile = async (userId) => {
    try {
        const userProfile = await Profile.findOne({ userId })
            .populate('followers', 'firstName lastName')
            .populate('following', 'firstName lastName');
        return userProfile;
    } catch (error) {
        throw error;
    }
};

exports.updateProfile = async (userId, updatedData) => {
    try {
        const updatedProfile = await Profile.findOneAndUpdate({ userId }, updatedData, { new: true });
        return updatedProfile;
    } catch (error) {
        throw error;
    }
};

exports.followProfile = async (userId, profileIdToFollow) => {
    try {
        const user = await Profile.findOne({ userId });
        const profileToFollow = await Profile.findById(profileIdToFollow);

        if (!user || !profileToFollow) {
            throw new Error('User or profile not found');
        }

        user.following.push(profileIdToFollow);
        profileToFollow.followers.push(userId);

        await user.save();
        await profileToFollow.save();
    } catch (error) {
        throw error;
    }
};

exports.unfollowProfile = async (userId, profileIdToUnfollow) => {
    try {
        const user = await Profile.findOne({ userId });
        const profileToUnfollow = await Profile.findById(profileIdToUnfollow);

        if (!user || !profileToUnfollow) {
            throw new Error('User or profile not found');
        }

        user.following.pull(profileIdToUnfollow);
        profileToUnfollow.followers.pull(userId);

        await user.save();
        await profileToUnfollow.save();
    } catch (error) {
        throw error;
    }
};
