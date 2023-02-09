import {Schema, model} from "mongoose"



const ProductSchema = new Schema({
    uuid: {type: String},
    name: {type: String, required: true},
    description: {type: String, required:true},
    price: {type: Number, required:true},
    images: [{required: true, type: String}],
    timestamps: {type: Object}
})

const ProductModel = model("products", ProductSchema)
export default ProductModel