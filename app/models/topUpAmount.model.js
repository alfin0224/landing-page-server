import mongoose from 'mongoose';

const topUpAmountSchema = mongoose.Schema(
  {
    points: { type: Number, required: true },
    price: { type: Number, required: true },
    gameCatalog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'game_catalog', 
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

topUpAmountSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

const TopUpAmountModel = mongoose.model('top_up_amount', topUpAmountSchema);

export default TopUpAmountModel;
