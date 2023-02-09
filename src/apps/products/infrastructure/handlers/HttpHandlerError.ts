import { Response } from "express"

export const httpHandlerError =   (response: Response, message: string, code:number) =>{
    response.send({message})
    response.status(code)
}