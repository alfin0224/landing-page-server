import express from "express";
import {
    getSliderPromo, 
    getSliderPromoId,
    createSliderPromo,
    deleteSliderPromo
} from "../controllers/sliderPromo.controller.js";

const router = express.Router();

router.get('/slider-promo', getSliderPromo);
router.get('/slider-promo/:id', getSliderPromoId);
router.post('/slider-promo/', createSliderPromo);
router.delete('/slider-promo/:id', deleteSliderPromo);

export default router;