const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rulerSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	}
},
	{
		timestamps: false

	});

const ruler = mongoose.model("Ruler", rulerSchema);

module.exports = ruler;