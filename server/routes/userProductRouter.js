const Router = require('express')
const router = new Router()
const userProductController = require('../controllers/userProductController')

router.post('/', userProductController.create)
router.get('/', userProductController.getAll)
router.get('/:id', userProductController.getOne)
router.get('/user/:userId', userProductController.getUserAll)

module.exports = router