import { getAllUsers, createUser, getUserByEmail, getUserById } from "./users.repository"

export async function getAllUsersFunction() {
    const result = await getAllUsers()
}
