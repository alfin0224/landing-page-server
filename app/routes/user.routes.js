import express from 'express';
import {
  getAllUsers,
  getUserByUserId,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js'

const router = express.Router();


router.get('/users', getAllUsers);
router.get('/users/search', getUserByUserId);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

export default router;
