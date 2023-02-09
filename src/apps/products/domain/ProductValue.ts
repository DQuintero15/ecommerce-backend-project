import { ProductEntity } from "./ProductEntity"
import { v4 } from "uuid"


export class ProductValue implements ProductEntity{
    uuid: string
    name: string
    description: string
    price: number
    timestamps: object
    images: string[]

    constructor({name, description, price, images}: {name:string, description:string, price:number, images:string[] }){
        this.uuid = v4()
        this.name = name
        this.description = description ?? "No presenta descripción"
        this.price = price
        this.images = images
        this.timestamps = {
            createdAt: Date.now()
        }
    }
    
}   
