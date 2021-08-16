const { Router } = require("express");

const isAuth = require("../middlewares/isAuth");
const isGuest = require("../middlewares/isGuest")

const router = Router();

const authService = require("../services/authService")

router.post("/login", isGuest, async (req, res) => {
    try {
        let data = await authService.login(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.post("/register", isGuest, async (req, res) => {
    try {
        let data = await authService.register(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get("/logout", isAuth, (req, res) => {
    res.locals.user = undefined;
    res.status(200).json({});
})


router.post("/edit-profile", isAuth, async (req, res) => {
    try {
        let data = await authService.editProfile(req.body, res.locals.user.id);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;