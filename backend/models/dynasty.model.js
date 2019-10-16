const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dynastySchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	notes: {
		type: String,
		trim: true
	},
	periodFrom: {
		type: String,
		required: true,
		trim: true
	},
	periodTo: {
		type: String,
		required: true,
		trim: true
	}
},
	{
		timestamps: false

	});

const dynasty = mongoose.model("Dynasty", dynastySchema);

module.exports = dynasty;