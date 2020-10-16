import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true, dropDups: true},
    password: {type: String, required: true},
    cpf: {type: String, required: true, unique: true, index: true, dropDups: true},
    natucoin: {type: Number, required: true, default: 10},
    isTrained: {type: Boolean, required: true, default: false},
    isAdmin: {type: Boolean, required: true, default: false}
});

const userModel = mongoose.model("User", userSchema);

export default userModel;