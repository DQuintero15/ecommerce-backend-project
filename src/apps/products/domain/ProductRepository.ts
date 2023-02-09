import { ProductEntity } from "./ProductEntity"


export interface ProductRepository {
    getProducts(): Promise<ProductEntity[]>
    getProductByName(uuid:string):  Promise<ProductEntity>
    createProduct(productEntity: ProductEntity) : Promise<ProductEntity>
    updateProdudct(uuid:string, {name, description, price, images}:{name:string, description:string, price:number, images:[] }) : Promise<ProductEntity>
    deleteProduct(uuid:string):  Promise<ProductEntity>
}