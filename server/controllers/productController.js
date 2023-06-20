const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class ProductController {
    async create(req, res, next) {
        try {
            const {title, description, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({title, description, price, img: fileName})
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const product = await Product.findAll()
        return res.json(product)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where:{id}
            }
        )
        return res.json(product)
    }
}

module.exports = new ProductController()