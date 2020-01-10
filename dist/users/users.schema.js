"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
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
    items: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'Item' }],
});
//# sourceMappingURL=users.schema.js.map