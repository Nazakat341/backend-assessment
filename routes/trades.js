const express = require('express');
const router = express.Router();
const controllers = require("../controllers/trades");

// endpoints
router.post('/', controllers.createTrade);
router.get('/', controllers.getAllTrades);

router.get("/:id", controllers.getSingleTrade);

router.put("/:id", controllers.updateTrade);
router.patch("/:id", controllers.patchTrade);
router.delete("/:id",  controllers.deleteTrade);


module.exports = router;




