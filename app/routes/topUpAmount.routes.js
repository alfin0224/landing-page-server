import express from 'express';
import { 
    getTopUpAmount,
    getTopUpAmountsByGameCatalog,
    createTopUpAmount,
    bulkInsertTopUpAmounts 
} from '../controllers/topUpAmount.controller.js';

const router = express.Router();

router.get('/top-up-amounts', getTopUpAmount);
router.get('/top-up-amounts/game-catalog/:gameCatalogId', getTopUpAmountsByGameCatalog);
router.post('/top-up-amounts', createTopUpAmount);
router.post('/top-up-amounts/bulk-insert', bulkInsertTopUpAmounts);

export default router;
