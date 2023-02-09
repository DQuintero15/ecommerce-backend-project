import ProductRemoverPort from "../ports/ProductRemoverPort"
import { ProductRepository } from "../../domain/ProductRepository"
import { ProductEntity } from "../../domain/ProductEntity"


export class ProductRemover implements ProductRemoverPort {

    constructor(private readonly productRepository:ProductRepository){}
    async deleteProductByUUID(uuid: string): Promise<ProductEntity> {
        const deletedProduct = await this.productRepository.deleteProduct(uuid)
        return deletedProduct
    }
}