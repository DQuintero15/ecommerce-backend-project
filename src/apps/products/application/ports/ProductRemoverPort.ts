import { ProductEntity } from "../../domain/ProductEntity"


export default interface ProductRemoverPort {
    deleteProductByUUID(uuid: string): Promise<ProductEntity>
}