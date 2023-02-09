import "dotenv/config"
import express from "express"
import cors from "cors"
import productRouter from "./apps/products/infrastructure/routes/ProductsRoutes"
import {dbConnection}  from "./apps/products/infrastructure/config/MongoDBConfig"


dbConnection()
const app = express() 
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use("/products", productRouter)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
    
})
