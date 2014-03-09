exports.getSignup = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('signup.html', {
    title: 'Create Account'
  });
};