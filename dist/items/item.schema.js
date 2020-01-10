"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ItemsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UsersSchema', required: true },
});
//# sourceMappingURL=item.schema.js.map