import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
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

userSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
