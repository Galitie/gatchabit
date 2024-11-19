import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI + "DB");
mongoose.Promise = global.Promise;

const gardenTileSchema = new Schema({
  backgroundURL: String,
  middleLayerURL: String,
  item: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item", // Reference the Item model
    },
  ],
});

const GardenTile =
  mongoose.models.GardenTile || mongoose.model("GardenTile", gardenTileSchema);
export default GardenTile;
