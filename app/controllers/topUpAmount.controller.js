import TopUpAmount from "../models/topUpAmount.model.js";
import GameCatalog from "../models/gameCatalog.model.js";

export const getTopUpAmount= async(req, res) => {
    try {
        const response = await TopUpAmount.find().populate("gameCatalog");
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTopUpAmountsByGameCatalog = async(req, res) => {
    try {
        const gameCatalogId = req.params.gameCatalogId;
        const response = await TopUpAmount.find({ gameCatalog: gameCatalogId });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTopUpAmount= async (req, res) => {
    try {
      const { points, price, gameCatalogId } = req.body;
      const gameCatalog = await GameCatalog.findById(gameCatalogId);
  
      if (!gameCatalog) {
        return res.status(404).json({ error: "Game catalog not found" });
      }
  
      const newTopUpAmount = new TopUpAmount({
        points: points,
        price: price,
        gameCatalog: gameCatalog._id,
      });
  
      const savedTopUpAmount = await newTopUpAmount.save();
  
      res.status(201).json(savedTopUpAmount);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };


export const bulkInsertTopUpAmounts = async (req, res) => {
    try {
      const topUpAmounts = req.body;
  
      const insertedTopUpAmounts = await TopUpAmount.insertMany(topUpAmounts);
  
      return res.status(201).json(insertedTopUpAmounts);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
