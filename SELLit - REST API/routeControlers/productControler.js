const { Router } = require("express");
const router = Router();

const isAuth = require("../middlewares/isAuth");
const isGuest = require("../middlewares/isGuest");

router.get("/",(req, res) => {
    console.log(res.locals.user)
    res.json("it works");
})

module.exports = router;