import mongoose, { Document, Schema } from "mongoose"

export interface IGoogleSchema extends Document {
    id: string
    displayName: string
    photos: string
    email: string
}

const GoogleSchema: Schema<IGoogleSchema> = new Schema<IGoogleSchema>(
    {
        id: {
            type: String,
            required: true,
        },
        displayName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        photos: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const GoogleModel = mongoose.model<IGoogleSchema>("google", GoogleSchema)
export default GoogleModel
