const { Router } = require("express");
const router = Router();

const isAuth = require("../middlewares/isAuth");
const isGuest = require("../middlewares/isGuest");

const productService = require("../services/productService");

router.get("/all-products", async (req, res) => {
    try {
        let data = await productService.getAllProducts();
        res.status(200).json(data);
    } catch {
        res.status(500).json({});
    }
});

router.post("/create-product", isAuth, async (req, res) => {
    try {
        let data = await productService.create(req.body, res.locals.user.id);
        res.status(201).json({ message: "Created", objectId: data._id });
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;