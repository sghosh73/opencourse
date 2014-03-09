var mongoose = require('mongoose');

var mailingList = mongoose.Schema({
	users: [
		name: String,
		email: String
	]
});

module.exports = mongoose.model('MailingList', mailingList);