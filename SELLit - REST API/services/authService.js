const User = require("../schemes/User");
const validator = require("validator");
const bcrypt = require("bcrypt");
let jwt = require('jsonwebtoken');
const { SALT_ROUNDS, JWT_SECRET, IMAGE_URL_PATTERN } = require("../config")

async function createUser(data) {
    let { email, username, password } = data;

    if (email.trim() == "" || username.trim() == "" || password.trim() == "") {
        throw { message: "All fields are required!" };
    }

    if (email.trim().length < 4 || username.trim().length < 4 || password.trim().length < 4) {
        throw { message: "Username, Email, and Password must be at least 4 characters!" };
    }

    if (!validator.isEmail(email.trim())) {
        throw { message: "Invalid Email!" };
    }

    let [findUser, findEmail] = await Promise.all([
        User.findOne({ username: username.toLowerCase().trim() }),
        User.findOne({ email: email.toLowerCase().trim() })
    ])

    if (findUser) {
        throw { message: "User exist!" };
    }

    if (findEmail) {
        throw { message: "User with current email exist!" };
    }

    const hash = bcrypt.hashSync(password.trim(), SALT_ROUNDS);

    const userObj = new User({
        username: username.trim(),
        email: email.trim(),
        password: hash,
    })

    return userObj.save();
}

async function register(data) {

    try {
        await createUser(data);
    } catch (err) {
        throw { message: err.message };
    }

    let user = await User.findOne({ username: data.username });

    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username: user.username, email: user.email };
}

async function login(data) {
    let { username, password } = data;

    if (username == "" || password == "") {
        throw { message: "All fields are required!" };
    }

    let user = await User.findOne({ username: username });

    if (!user) {
        throw { message: "Incorect username or password!" };
    }

    let isMatch = bcrypt.compareSync(data.password, user.password);

    if (!isMatch) {
        throw { message: "Incorect username or password!" };
    }

    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username: user.username, email: user.email };
}

async function editProfile(data, profileId) {
    let { username, imageUrl } = data;

    if (username == "" || imageUrl == "") {
        throw { message: "All fields are required!" }
    }

    if (username.length < 4) {
        throw { message: "ImageUrl must be at least 4 characters!" }
    }

    if (imageUrl.length < 10) {
        throw { message: "ImageUrl must be at least 10 characters!" }
    }

    if (!IMAGE_URL_PATTERN.test(imageUrl)) {
        throw { message: "Invalid ImageUrl" }
    }

    let user = await User.findOne({ _id: profileId })

    if(!user) {
        throw { message: "Invalid User" }
    }

    try {
        await User.updateOne({_id: profileId}, {username, profileImg: imageUrl})
    } catch {
        throw {message: "Update profile error"}
    }

    let token = jwt.sign({ id: user._id, username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username, email: user.email }
}

module.exports = {
    register,
    login,
    editProfile
}