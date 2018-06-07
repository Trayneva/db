'use strict';

const mongoose = require('./model'),
	Schema = mongoose.Schema,
	TeamSchema = new Schema({
		_id : Schema.Types.ObjectId,
		name : String,
		surname : String,
		otch : String,
		birthday : String,
		tel : String,
		e_mail : String
	},
	{
		collection : 'team'
	}),
	Team = mongoose.model('Team', TeamSchema);

module.exports = Team;