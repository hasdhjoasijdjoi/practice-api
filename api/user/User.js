const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    name: String,
    age : Number,
}
);

const UserModel = mongoose.model('User2', UserSchema);

module.exports = { UserModel }