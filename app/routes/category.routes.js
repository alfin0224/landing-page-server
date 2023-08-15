import express from "express";
import {
    getCategories, 
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/category.controller.js";

const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryById);
router.post('/categories/', createCategory);
router.put('/categories/:categoryId', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;