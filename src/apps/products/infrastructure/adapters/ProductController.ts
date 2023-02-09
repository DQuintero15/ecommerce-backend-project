import { Request, Response } from "express"
import { CREATED, OK, NOT_FOUND, NOT_ACCEPTABLE } from "http-status"
import { MongoDBRepository } from "../repository/MongoDBRepository"
import ProductCreatorPort from "../../application/ports/ProductCreatorPort"
import { ProductCreator } from "../../application/services/ProductCreator"
import ProductObtainerPort from "../../application/ports/ProductObtainerPort"
import { ProductObtainer } from "../../application/services/ProductObtainer"
import { ProductRemover } from "../../application/services/ProductRemover"
import { httpHandlerError } from "../handlers/HttpHandlerError"


export class ProductController {
    constructor(private productCreatorPort: ProductCreatorPort, 
                private productObtainerPort: ProductObtainerPort,
                private productRemoverPort: ProductRemover){
    }
    createProductController = async(request: Request, response: Response) =>{
        try {
            const {body} = request
            const product = await this.productCreatorPort.createProduct(body)
            response.status(CREATED)      
            response.send({ product })
        } catch (error) {
            httpHandlerError(response, "Error creating product...", NOT_ACCEPTABLE)
        }
    }

    getProducts =  async(request: Request, response: Response) =>{
        try {
            const products = await this.productObtainerPort.getProducts()
            response.status(OK)
            response.send({products})
        } catch (error) {
            httpHandlerError(response, "Error getting product list...", NOT_FOUND)
        }
    }

    removeProduct =  async(request: Request, response: Response) =>{
        try {
            const {params} = request
            const deletedProduct = await this.productRemoverPort.deleteProductByUUID(params.uuid)
            response.status(OK)
            response.send({deletedProduct})
        } catch (error) {
            httpHandlerError(response, "Product not found...", NOT_FOUND)
        }
    }
}


const mongoDBRepository =  new MongoDBRepository()
const productCreator = new ProductCreator(mongoDBRepository)
const productObtainer = new ProductObtainer(mongoDBRepository)
const productRemover =  new ProductRemover(mongoDBRepository)
const productController = new ProductController(productCreator, productObtainer, productRemover)

export default productController