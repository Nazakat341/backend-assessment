const express = require("express");
const router = express.Router();
const { Trade } = require("../models/trades"); // Update the path accordingly

// Middleware to parse JSON requests
router.use(express.json());

// POST request to create a new trade
exports.createTrade =  async (req, res) => {
  try {
    const tradeData = req.body;
    const createdTrade = await Trade.create(tradeData);
    res.status(201).json(createdTrade);
  } catch (error) {
    res.status(400).json({ error: "Invalid input data" });
  }
};

// GET request to retrieve all trades or filtered trades
exports.getAllTrades = async (req, res) => {
  try {
    const { type, user_id } = req.query;
    let whereClause = {};

    if (type) {
      whereClause.type = type;
    }

    if (user_id) {
      whereClause.user_id = user_id;
    }

    const trades = await Trade.findAll({ where: whereClause });

    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET request to retrieve a trade by ID
exports.getSingleTrade = async (req, res) => {
  try {
    const { id } = req.params;
    const trade = await Trade.findByPk(id);

    if (!trade) {
      res.status(404).json({ error: "Trade not found" });
    } else {
      res.status(200).json(trade);
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// PUT request to update a trade (not allowed)
exports.updateTrade = (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
};

// PATCH request to update a trade (not allowed)
exports.patchTrade = (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
};

// DELETE request to delete a trade (not allowed)
exports.deleteTrade = (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
};


