const Post = require("../schemes/Post");
const User = require("../schemes/User");
const { IMAGE_URL_PATTERN, CONDITION_PATTERN, PHONE_PATTERN } = require("../config")

function getAllProducts() {
    return Post.find({});
}

async function create(bodyData, userId) {
    let { name, imageUrl, description, condition, price, phone } = bodyData;

    let data = [name, imageUrl, description, condition, price, phone]
        .map(x => {
            if (x) {
                console.log(x)
                return x.toString().trim();
            }

            return " "
        })

    if (data.includes(" ")) {
        throw { message: "All fields are required!" }
    }

    if (data[0].length < 4) {
        throw { message: "Name must be at least 4 characters!" }
    }

    if (data[1].length < 10) {
        throw { message: "ImageUrl must be at least 10 characters!" }
    }

    if (!IMAGE_URL_PATTERN.test(data[1])) {
        throw { message: "Invalid ImageUrl" }
    }

    if (data[2].length < 8) {
        throw { message: "Description must be at least 8 characters!" }
    }

    if (!CONDITION_PATTERN.test(data[3])) {
        throw { message: "Invalid Condition value" }
    }

    if (!(!!Number(data[4]))) {
        throw { message: "Invalid Price value" }
    }

    if (!PHONE_PATTERN.test(data[5])) {
        throw { message: "Invalid Phone value" }
    }

    let productObj = new Post({
        name: data[0],
        imageUrl: data[1],
        description: data[2],
        condition: data[3],
        price: data[4],
        phone: data[5],
        creator: userId,
    })

    return productObj.save()
}

async function edit(bodyData, userId, productId) {
    let product = await Post.findOne({ _id: productId });

    if (product.creator.toString() !== userId) {
        throw { message: "Unauthorized!" }
    }

    let { name, imageUrl, description, condition, price, phone } = bodyData;

    let data = [name, imageUrl, description, condition, price, phone]
        .map(x => {
            if (x) {
                return x.toString().trim();
            }

            return " "
        })

    if (data.includes(" ")) {
        throw { message: "All fields are required!" }
    }

    if (data[0].length < 4) {
        throw { message: "Name must be at least 4 characters!" }
    }

    if (data[1].length < 10) {
        throw { message: "ImageUrl must be at least 10 characters!" }
    }


    if (!IMAGE_URL_PATTERN.test(data[1])) {
        throw { message: "Invalid ImageUrl" }
    }

    if (data[2].length < 8) {
        throw { message: "Description must be at least 8 characters!" }
    }

    if (!CONDITION_PATTERN.test(data[3])) {
        throw { message: "Invalid Condition value" }
    }

    if (!(!!Number(data[4]))) {
        throw { message: "Invalid Price value" }
    }

    if (!PHONE_PATTERN.test(data[5])) {
        throw { message: "Invalid Phone value" }
    }

    return Post.updateOne({ _id: productId }, {
        name: data[0],
        imageUrl: data[1],
        description: data[2],
        condition: data[3],
        price: data[4],
        phone: data[5]
    })
}

async function deleteOne(userId, productId) {
    let product = await Post.findOne({ _id: productId });

    if (product.creator.toString() !== userId) {
        throw { message: "Unauthorized!" }
    }

    return Post.deleteOne({ _id: productId })
}

function getOne(productId) {
    return Post.findOne({ _id: productId })
        .populate({ path: "creator", select: ["email", "username", "likes", "profileImg"] })

}

function getProfilePosts(profileId) {
    return Promise.all([
        User.findOne({ _id: profileId }).select("email").select("username").select("likes").select("profileImg"),
        Post.find({ creator: profileId })
    ])
    .then(([profileInfo, products]) => {
            return Object.assign({ profileInfo, products })
        })
}

function getMyFavouritePost(profileId) {
    return User.findOne({_id: profileId}).select("likedPosts").populate("likedPosts");
}

async function likePost(productId, userId) {
    let [post, user] = await Promise.all([
        Post.findOne({ _id: productId }),
        User.findOne({ _id: userId })
    ]);

    if(user.likedPosts.includes(productId)){
        throw {message: "Already liked"}
    }

    post.likes.push(userId);
    user.likedPosts.push(productId);

    return Promise.all([
        Post.updateOne({ _id: productId }, post),
        User.updateOne({ _id: userId }, user)
    ]);

}



module.exports = {
    getAllProducts,
    create,
    edit,
    deleteOne,
    getOne,
    getProfilePosts,
    likePost,
    getMyFavouritePost
}
