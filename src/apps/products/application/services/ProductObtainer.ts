import { ProductEntity } from "../../domain/ProductEntity"
import { ProductRepository } from "../../domain/ProductRepository"
import ProductObtainerPort from "../ports/ProductObtainerPort"


export class ProductObtainer implements ProductObtainerPort{
    constructor(private readonly productRepository: ProductRepository){}

    async getProducts(): Promise<ProductEntity[]> {
        const products = await this.productRepository.getProducts()
        return products 
    }

}