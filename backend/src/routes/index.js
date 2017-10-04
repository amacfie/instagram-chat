module.exports = function(app) {
  var router = require('express').Router();

  router.use('/instagram', require('./instagram')(app));

  return router;
};
