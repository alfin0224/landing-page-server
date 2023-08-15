import mongoose from "mongoose";


const categorySchema = mongoose.Schema(
    {
        name: { type: String, required: true },
    }, {
        timestamps: true
    }
);

categorySchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  };

const categoryModel = mongoose.model("category", categorySchema)

export default categoryModel;