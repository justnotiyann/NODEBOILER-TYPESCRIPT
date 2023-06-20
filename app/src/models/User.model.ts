import mongoose, { Document, Schema } from "mongoose"
import bcryptjs from "bcryptjs"

export interface IUserSchema extends Document {
    username: string
    email: string
    password: string
    comparePassword?: (password: string) => Promise<boolean>
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

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcryptjs.compare(password, this.password)
}

const Users = mongoose.model<IUserSchema>("user", UserSchema)
export default Users
