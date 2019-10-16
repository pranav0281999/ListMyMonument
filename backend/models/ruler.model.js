const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rulerSchema = new Schema({
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
	},
	dynasty: {
		type: Schema.Types.ObjectId,
		ref: 'Dynasty',
		required: true
	}
},
	{
		timestamps: false

	});

const ruler = mongoose.model("Ruler", rulerSchema);

module.exports = ruler;