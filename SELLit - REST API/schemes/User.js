const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requred: true,
        minLength: 4
    },
    username: {
        type: String,
        requred: true,
        minLength: 4
    },
    password: {
        type: String,
        requred: true
    }
});

module.exports = mongoose.model("User", userSchema);