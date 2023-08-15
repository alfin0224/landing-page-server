import express from "express";
import { 
    getGameCatalog,
    getGameCatalogsByCategory,
    getGameCatalogById,
    createGameCatalog ,
    updateGameCatalog,
    updateGameCatalogDescription,
    deleteGameCatalog
} from "../controllers/gameCatalog.controller.js";

const router = express.Router();

router.get("/game-catalogs", getGameCatalog);
router.get("/game-catalogs/:id", getGameCatalogById);
router.put('/game-catalogs/:gameId', updateGameCatalog);
router.get("/game-catalogs/category/:categoryId", getGameCatalogsByCategory);
router.post("/game-catalogs", createGameCatalog);
router.delete('/game-catalog/:gameId', deleteGameCatalog);
router.put('/game-catalogs/:id/description', updateGameCatalogDescription);

export default router;