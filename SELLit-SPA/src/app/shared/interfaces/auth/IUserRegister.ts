import { IUserLogin } from "./IUserLogin"

export interface IUserRegister extends IUserLogin {
    email: string,
}