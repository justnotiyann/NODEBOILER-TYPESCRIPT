import { Document } from "mongoose"
import { IPaginationResult } from "./pagination"

export interface IUserSchema extends Document {
    username: string
    email: string
    password: string
    comparePassword?: (password: string) => Promise<boolean>
    getAllUsers?: (page: number, limit: number) => Promise<IPaginationResult<IUserSchema>>
}
