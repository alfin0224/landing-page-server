import mongoose from "mongoose";


const sliderPromoSchema = mongoose.Schema(
    {
        imageUrl: { type: String, required: true },
        alt: { type: String, required: true },
    }, {
        timestamps: true
    }
);

sliderPromoSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  };

const sliderPromoModel = mongoose.model("slider_promo", sliderPromoSchema)

export default sliderPromoModel;