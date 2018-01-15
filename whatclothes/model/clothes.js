const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothingSchema = new Schema({
	title: String,
	link: String
});

const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;