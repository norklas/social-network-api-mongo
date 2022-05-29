// Connecting routes to the server
const router = require("express").Router();
const userRoutes = require("./user-routes");

// Add prefix
router.use("/users", userRoutes);

module.exports = router;
