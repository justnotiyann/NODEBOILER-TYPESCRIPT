import { IPaginationResult } from "../../interface/pagination"
import Users from "../../models/User.model"
import { IUserSchema } from "../../interface/userSchema"

export async function getAllUsers(page: number, limit: number): Promise<IPaginationResult<IUserSchema>> {
    const skipCount = (page - 1) * limit

    const totalUsers = await Users.countDocuments()
    const totalPages = Math.ceil(totalUsers / limit)

    const users = await Users.find().skip(skipCount).limit(limit)

    const paginationResult: IPaginationResult<IUserSchema> = {
        total: totalUsers,
        totalPages: totalPages,
        currentPage: page,
        data: users,
    }
    return paginationResult
}

export async function createUser(username: string, email: string, password: string) {
    const result = new Users({
        username,
        email,
        password,
    })
    await result.save()
    return result
}

export async function getUserByIdServices(id: string): Promise<IUserSchema | null> {
    const result = await Users.findById(id)
    return result
}

export async function getUserByUsernameServices(username: string): Promise<IUserSchema | null> {
    const result = await Users.findOne({ username })
    return result
}

export async function getUserByEmailServices(email: string): Promise<IUserSchema | null> {
    const result = await Users.findOne({ email })
    return result
}
