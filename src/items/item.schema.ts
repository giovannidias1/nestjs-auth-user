import * as mongoose from 'mongoose';

export const ItemsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UsersSchema', required: true},
});
