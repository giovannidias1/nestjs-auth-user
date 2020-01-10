import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    birthdate: Date,
    auth: {
        email: {
            valid: { type: Boolean, default: false },
        },
    },
    items: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'Item'}],
});
