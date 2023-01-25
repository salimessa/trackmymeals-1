var express = require('express')
var router = express.Router()
var mealsCtrl = require('../controllers/meals')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', mealsCtrl.index)

router.get('/new', ensureLoggedIn, mealsCtrl.new)

router.post('/', ensureLoggedIn, mealsCtrl.create)

router.get('/:id', ensureLoggedIn, mealsCtrl.show)

router.get('/:id/edit', ensureLoggedIn, mealsCtrl.edit)

router.put('/:id', ensureLoggedIn, mealsCtrl.update)

router.delete('/:id', ensureLoggedIn, mealsCtrl.delete)

module.exports = router