import db from "../config/database.js";
import mongoose from "mongoose";
import sliderPromoModel from "./sliderPromo.model.js";
import categoryModel from "./category.model.js";
import gameCatalogModel from "./gameCatalog.model.js";

const dbModel = {
    mongoose,
    url: db,
    sliderPromo: sliderPromoModel(mongoose),
    category: categoryModel(mongoose),
    gameCatalog: gameCatalogModel(mongoose)
}

export default dbModel;

