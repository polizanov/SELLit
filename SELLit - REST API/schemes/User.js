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
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }],
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }]
});

module.exports = mongoose.model("User", userSchema);