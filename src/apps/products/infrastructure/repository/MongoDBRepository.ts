import { ProductEntity } from "../../domain/ProductEntity"
import { ProductRepository } from "../../domain/ProductRepository"
import { ProductValue } from "../../domain/ProductValue"
import ProductModel from "../models/ProductModel"


export class MongoDBRepository implements ProductRepository {
    async getProducts(): Promise<ProductEntity[]> {
        const products: ProductEntity[] = await ProductModel.find()
        return products
    }

    async getProductByName(uuid: string): Promise<ProductEntity> {
        throw new Error("Method not implemented.")
    }

    async createProduct(productEntity: ProductEntity): Promise<ProductEntity> {
        const productObject = Object.assign({}, productEntity)
        const infrastructureProduct = await ProductModel.create(productObject)
        return Object.assign(new ProductValue(infrastructureProduct), infrastructureProduct.$locals)
    }

    async updateProdudct(uuid: string, { name, description, price }: { name: string; description: string; price: number }): Promise<ProductEntity> {
        throw new Error("Method not implemented.")
    }

    async deleteProduct(uuid: string): Promise<ProductEntity> {
        const deletedProduct: ProductEntity | null = await ProductModel.findOneAndDelete({uuid})
        if(!deletedProduct){
            throw new Error("Product not found")
        }
        return deletedProduct
    }
}
