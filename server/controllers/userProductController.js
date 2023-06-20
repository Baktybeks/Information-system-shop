const {UserProduct, Product, User} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserProductController {
    async create(req, res, next) {
        try {
            const {productId, userId} = req.body
            const userProduct = await UserProduct.create({productId, userId})
            return res.json(userProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const userProduct = await UserProduct.findAll({
            include: [
                {
                    model: Product,
                    attributes: ['title', 'description', 'img', 'price']
                },
                {
                    model: User,
                    attributes: ["login", 'phone','email']
                },
            ],
        })
        return res.json(userProduct)
    }

    async getUserAll(req, res) {
        const {userId} = req.params
        const userProduct = await UserProduct.findAll(
            {
                where:{userId},
                include: [
                    {
                        model: Product,
                        attributes: ['title', 'description', 'img', 'price']
                    }
                ]
            }
        )
        return res.json(userProduct)
    }

    async getOne(req, res) {
        const {id} = req.params
        const userProduct = await UserProduct.findOne(
            {
                where:{id}
            }
        )
        return res.json(userProduct)
    }
}

module.exports = new UserProductController()