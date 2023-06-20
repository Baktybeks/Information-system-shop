const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const reviewController = require('./reviewRouter')
const userProductRouter = require('./userProductRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/review', reviewController)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/user_product', userProductRouter)

module.exports = router