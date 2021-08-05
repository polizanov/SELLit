import { ICreator } from "../ICreator"
import {IPost} from "../IPost"


export interface IProfile {
    profileInfo: ICreator,
    products: IPost[],
}