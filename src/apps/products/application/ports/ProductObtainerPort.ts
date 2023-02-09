import { ProductEntity } from "../../domain/ProductEntity"


export default interface ProductObtainerPort {
    getProducts(): Promise<ProductEntity[]> 
}