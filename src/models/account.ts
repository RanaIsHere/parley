import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    email: String,
    password: String
});

const accountModel = mongoose.models.account || mongoose.model("Account", accountSchema);
export default accountModel;
