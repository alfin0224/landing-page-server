import mongoose from "mongoose";


const gameCatalogSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
        description: { type: String },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
            required: true,
          },
    }, {
        timestamps: true
    }
);

gameCatalogSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  };

const gameCatalogModel = mongoose.model("game_catalog", gameCatalogSchema)

export default gameCatalogModel;