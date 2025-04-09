const express = require("express");

const logger = require("../utils/logger");

const router = express.Router();

router.get("/", () => {
  logger.getProcessLog();
  process.exit();
});

module.exports = router;