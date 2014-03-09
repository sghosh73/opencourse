module.exports = {
	db: 'mongodb://localhost:27017/',

	facebookAuth: true,
  	facebook: {
    clientID: '418666281611190',
    clientSecret: '4d7c9fa3e3794683dc73c121471c01bc',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  	},

  	 venmo: {
    	clientId: '1641',
    	clientSecret: 'rry2y9CrFrTTvqbYfjmDXrUpp74YsE6P',
    	redirectUrl: 'http://localhost:3000/auth/venmo'
  },
};