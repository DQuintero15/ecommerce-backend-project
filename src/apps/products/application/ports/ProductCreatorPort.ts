import { ProductEntity } from "../../domain/ProductEntity"


export default interface ProductCreatorPort {
    createProduct(data: ProductEntity): Promise<ProductEntity>
}