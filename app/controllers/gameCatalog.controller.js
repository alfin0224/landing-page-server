import GameCatalog from "../models/gameCatalog.model.js";
import Category from "../models/category.model.js";

export const getGameCatalog = async(req, res) => {
    try {
        const response = await GameCatalog.find().populate("category");
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGameCatalogsByCategory = async(req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const response = await GameCatalog.find({ category: categoryId });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getGameCatalogById = async(req, res) => {
    try {
        const id = req.params.id;
        const response = await GameCatalog.findOne({ _id: id });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createGameCatalog = async (req, res) => {
    try {
      const { title, imageUrl, categoryId } = req.body;
      const category = await Category.findById(categoryId);
  
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
  
      const newGameCatalog = new GameCatalog({
        title: title,
        imageUrl: imageUrl,
        description: description,
        category: category._id,
      });
  
      const savedGameCatalog = await newGameCatalog.save();
  
      res.status(201).json(savedGameCatalog);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const updateGameCatalog = async (req, res) => {
    try {
      const { gameId } = req.params;
      const { title, imageUrl, description, category } = req.body; 
  
      const gameCatalog = await GameCatalog.findById(gameId);
  
      if (!gameCatalog) {
        return res.status(404).json({ error: 'Game catalog not found' });
      }
  
      gameCatalog.title = title;
      gameCatalog.imageUrl = imageUrl;
      gameCatalog.description = description;
      gameCatalog.category = category;
  
      await gameCatalog.save();
  
      return res.json(gameCatalog);
    } catch (error) {
      console.error('Error updating game catalog:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export const deleteGameCatalog = async (req, res) => {
    try {
      const { gameId } = req.params;
  
      const gameCatalogEntry = await GameCatalog.findById(gameId);
  
      if (!gameCatalogEntry) {
        return res.status(404).json({ error: 'Game catalog entry not found' });
      }
  
      await gameCatalogEntry.remove();
  
      return res.json({ message: 'Game catalog entry deleted successfully' });
    } catch (error) {
      console.error('Error deleting game catalog entry:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const updateGameCatalogDescription = async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updatedGameCatalog = await GameCatalog.findByIdAndUpdate(
        id,
        { description },
        { new: true } 
      );
  
      if (!updatedGameCatalog) {
        return res.status(404).json({ message: 'Game catalog not found' });
      }
  
      return res.status(200).json(updatedGameCatalog);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
