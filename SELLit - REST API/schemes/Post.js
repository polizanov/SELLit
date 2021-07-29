const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true,
        minLength: 4
    },
    imageUrl: {
        type: String,
        requred: true,
        minLength: 4,
        validate: /https?/
    },
    description: {
        type: String,
        requred: true,
        minLength: 8
    },
    condition: {
        type: String,
        requred: true,
        validate: /^(New|Used)$/
    },
    price: {
        type: Number,
        requred: true,
        min: 0
    },
    phone: {
        type: String,
        requred: true,
        minLength: 10,
        maxLength: 14,
        validate: /^([0-9|+]+)$/
    },
    liked: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model("Post", postSchema);