module.exports = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.forbidden({
      message: 'You are not authorized, please sign-in first.'
    });
  }
};
