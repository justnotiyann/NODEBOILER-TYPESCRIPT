import Users, { IUserSchema } from "../../models/User.model"

export async function getAllUsers(): Promise<IUserSchema[]> {
    const result = await Users.find()
    return result
}

export async function createUser(username: string, email: string, password: string) {
    const result = new Users({
        username,
        email,
        password,
    })
    return result
}

export async function getUserById(id: string): Promise<IUserSchema | null> {
    const result = await Users.findById(id)
    return result
}

export async function getUserByEmail(email: string): Promise<IUserSchema | null> {
    const result = await Users.findOne({ email })
    return result
}
