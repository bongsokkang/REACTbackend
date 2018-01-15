const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothingSchema = new Schema({
	name: String,
	photo: String,
	category: String,
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;