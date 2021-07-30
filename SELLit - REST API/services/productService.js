const Post = require("../schemes/Post");
const { IMAGE_URL_PATTERN, CONDITION_PATTERN, PHONE_PATTERN } = require("../config")

function getAllProducts() {
    return Post.find({});
}

async function create(bodyData, userId) {
    let { name, imageUrl, description, condition, price, phone } = bodyData;

    let data = [name, imageUrl, description, condition, price, phone]
        .map(x => {
            if (x) {
                return x.trim();
            }

            return " "
        })

    if (data.includes(" ")) {
        throw { message: "All fields are required!" }
    }

    if (data[0].length < 4 || data[1].length < 4) {
        throw { message: "Name and ImageUrl must be at least 4 characters!" }
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

module.exports = {
    getAllProducts,
    create,
}
