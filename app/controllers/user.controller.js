import UserModel from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserByUserId = async (req, res) => {
  try {
    const {userId} = req.query;
    console.log({userId});
    const user = await UserModel.findOne({ userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(user);
    return res.json(user);
  } catch (error) {
    console.error('Error fetching user by userId:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createUser = async (req, res) => {
  try {
    const { userId, name, gameCatalog } = req.body;
    const newUser = new UserModel({ userId, name, gameCatalog });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, gameCatalog } = req.body;

    const user = await UserModel.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.name = name;
    user.gameCatalog = gameCatalog;
    await user.save();

    return res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.remove();

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
