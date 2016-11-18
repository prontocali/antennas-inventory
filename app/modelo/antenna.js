var mongoose = require('mongoose');

module.exports = mongoose.model('Antenna', {
	name: String,
	ubiety: String,
	power: String
});