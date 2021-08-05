const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requred: true,
        minLength: 4
    },
    profileImg: {
        type: String,
        validate: /^([0-9|+]+)$/
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