import mongoose, { Document, Schema, Model } from "mongoose"
import bcryptjs from "bcryptjs"
import { IPaginationResult } from "../interface/pagination"

export interface IUserSchema extends Document {
    username: string
    email: string
    password: string
}

export interface IUserModel extends Model<IUserSchema> {
    getAllUsers: (page: number, limit: number) => Promise<IPaginationResult<IUserSchema>>
}

const UserSchema: Schema<IUserSchema> = new Schema<IUserSchema>(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

UserSchema.pre("save", async function (next): Promise<void> {
    if (this.isModified("password")) {
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(this.password, salt)
        this.password = hashPassword
    }
    next()
})

UserSchema.statics.getAllUsers = async function (page: number, limit: number): Promise<IPaginationResult<IUserSchema>> {
    const skipCount = (page - 1) * limit

    const totalUsers = await this.countDocuments()
    const totalPages = Math.ceil(totalUsers / limit)

    const users = await this.find({}, { password: 0 }).skip(skipCount).limit(limit)

    const paginationResult: IPaginationResult<IUserSchema> = {
        total: totalUsers,
        totalPages: totalPages,
        currentPage: page,
        data: users,
    }

    return paginationResult
}

const Users: IUserModel = mongoose.model<IUserSchema, IUserModel>("user", UserSchema)
export default Users
