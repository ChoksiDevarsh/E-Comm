const User = require('../models/users');

// Function to create a new user
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            verified: false,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        console.log(firstName, '--->firstName USER<---');
        console.log(lastName, '--->lastName USER<---');
        console.log(email, '--->email USER<---');
        console.log(password, '--->password USER<---');
        console.log(phoneNumber, '--->phoneNumber USER<---');

        return res.status(201).json({ message: 'User created successfully', savedUser });

    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const userDetail = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('--->USER DETAIL<---', user);

        return res.status(200).json({ user });

    } catch (error) {
        console.error('Error fetching user details:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log('--->ALL USERS<---', users);

        return res.status(200).json({ users });

    } catch (error) {
        console.error('Error fetching all users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { createUser, userDetail, getAllUsers };
