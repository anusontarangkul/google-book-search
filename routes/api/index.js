const router = require("express").Router();
const postRoutes = require("./posts");

router.use("/books", postRoutes);

module.exports = router;