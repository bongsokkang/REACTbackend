const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothingSchema = new Schema({
	name: String,
	photo: String
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;