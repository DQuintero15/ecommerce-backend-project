import { ProductEntity } from "../../domain/ProductEntity"
import { ProductRepository } from "../../domain/ProductRepository"
import { ProductValue } from "../../domain/ProductValue"
import ProductCreatorPort from "../ports/ProductCreatorPort"


export class ProductCreator implements ProductCreatorPort{
    constructor(private readonly productRepository: ProductRepository){}

    async createProduct(data: ProductEntity): Promise<ProductEntity> {
        const productValue = new ProductValue(data)
        const  productCreated = await this.productRepository.createProduct(productValue)
        return productCreated
    }
}