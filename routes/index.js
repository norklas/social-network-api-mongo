// Importing router
const router = require("express").Router();

// Import all of the API routes
const apiRoutes = require("./api");

// adding '/api' to the URL for all the api routes in the api directory
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>404 Error!</h1>");
});

module.exports = router;
