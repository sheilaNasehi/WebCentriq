const router = require("express").Router();

const userRoutes = require("./user");

// lessons routes
//all these routes are prefixed with a none visual /api

router.use("/user",userRoutes)

module.exports = router;
