var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userController');

/* GET users listing. */
router.get('/', userControllers.index);
router.get('/:id', userControllers.show);
router.post('/', userControllers.create);
router.put('/:id', userControllers.update);
router.delete('/:id', userControllers.delete);

module.exports = router;
