import { Schema, model } from "mongoose";
import bycrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false,
    }
);

// Cifrar y comparar contraseñas

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bycrypt.genSalt(10)
    return await bycrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bycrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);