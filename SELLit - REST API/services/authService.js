const User = require("../schemes/User");
const validator = require("validator");
const bcrypt = require("bcrypt");
let jwt = require('jsonwebtoken');
const { SALT_ROUNDS, JWT_SECRET } = require("../config")

async function createUser(data) {
    let { email, username, password } = data;

    if (email.trim() == "" || username.trim() == "" || password.trim() == "") {
        throw { message: "All fields are required!" }
    }

    if (email.trim().length < 4 || username.trim().length < 4 || password.trim().length < 4) {
        throw { message: "Username, Email, and Password must be at least 4 characters!" }
    }

    if (!validator.isEmail(email.trim())) {
        throw { message: "Invalid Email!" }
    }

    let user = await User.findOne({ username: username.toLowerCase().trim() })

    if (user) {
        throw { message: "User exist!" }
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
    console.log(data)
    try {
        await createUser(data);
    } catch (err) {
        console.log(err)
        throw { message: err.message }
    }

    let user = await User.findOne({ username: data.username });

    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username: user.username }
}

async function login(data) {
    let { username, password } = data;

    if (username == "" || password == "") {
        throw { message: "All fields are required!" }
    }

    let user = await User.findOne({ username: username });

    if (!user) {
        throw { message: "Incorect username or password!" }
    }

    let isMatch = bcrypt.compareSync(data.password, user.password);

    if (!isMatch) {
        throw { message: "Incorect username or password!" }
    }

    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username: user.username }
}

module.exports = {
    register,
    login,
}