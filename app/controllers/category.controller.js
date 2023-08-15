import Category from "../models/category.model.js";
import GameCatalog from "../models/gameCatalog.model.js";

export const getCategories = async(req, res) => {
    try {
        const response = await Category.find();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCategoryById = async(req, res) => {
    try {
        const response = await Category.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCategory = async(req, res) => {
    try {
        await Category.create(req.body);
        res.status(201).json({msg: "Category Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCategory = async (req, res) => {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;
  
      const category = await Category.findById(categoryId);
  
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      category.name = name;
      await category.save();
  
      return res.json(category);
    } catch (error) {
      console.error('Error updating category:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const deleteCategory = async(req, res) => {
    try {
        const categoryId = req.params.id;
    
        const category = await Category.findById(categoryId);
        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }
    
        await category.deleteOne();
        await GameCatalog.deleteMany({ category: categoryId });
    
        res.status(200).json({ message: "Category deleted successfully" });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
      }
}
