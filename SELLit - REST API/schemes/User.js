const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requred: true,
        minLength: 4
    },
    profileImg: {
        type: String,
        validate: /https?/
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
    likedPosts: [{
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }]
});

module.exports = mongoose.model("User", userSchema);