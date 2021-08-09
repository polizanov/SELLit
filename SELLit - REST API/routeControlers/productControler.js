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

router.put("/edit-product/:productId", isAuth, async (req, res) => {
    try {
        await productService.edit(req.body, res.locals.user.id, req.params.productId);
        res.status(201).json({ message: "Created" });
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})

router.delete("/delete-product/:productId", isAuth, async (req, res) => {
    try {
        await productService.deleteOne(res.locals.user.id, req.params.productId);
        res.status(201).json({ message: "Created" });
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})

router.get("/details/:productId", async (req, res) => {
    try {
        let data = await productService.getOne(req.params.productId);
        res.status(201).json(data);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})

router.get("/profile/:profileId", async (req, res) => {
    try {
        let data = await productService.getProfilePosts(req.params.profileId);
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
})

router.get("/like/:productId", isAuth, async (req, res) => {
    try {
        await productService.likePost(req.params.productId, res.locals.user.id);
        res.status(201).json({ message: "Created" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
})

router.get("/my-favourite-posts", isAuth, async (req, res) => {
    try {
        let data = await productService.getMyFavouritePost(res.locals.user.id);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
})



module.exports = router;