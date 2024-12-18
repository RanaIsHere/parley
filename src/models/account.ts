import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contacts: [{ type: Schema.Types.ObjectId, ref: "accounts" }],
});

const accountModel = mongoose.models.accounts || mongoose.model("accounts", accountSchema);
export default accountModel;
