import { Router } from "express"
import productController from "../adapters/ProductController"

const productRouter = Router()

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProductController)
productRouter.delete("/:uuid", productController.removeProduct)

export default productRouter