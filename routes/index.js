var express = require('express');
let indexController = require('../controllers/indexControllers');


var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
/*router.get('/detalle/:id', indexController.detalleMenu )*/

/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
