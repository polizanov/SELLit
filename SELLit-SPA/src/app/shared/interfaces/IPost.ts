import { ICreator } from "./ICreator"

export interface IPost {
    _id: string,
    name: string,
    imageUrl: string,
    description: string,
    condition: string,
    price: Number,
    phone: string,
    creator: ICreator,
    __v: Number,
}