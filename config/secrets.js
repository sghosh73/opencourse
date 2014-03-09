module.exports = {
	db: 'mongodb://localhost:27017/',

	venmoAccessToken: 'x8gqFg7quQbVtpcMafuPMQzAH7dW3esA',

	facebookAuth: true,
  	facebook: {
    clientID: '418666281611190',
    clientSecret: '4d7c9fa3e3794683dc73c121471c01bc',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  	}
};