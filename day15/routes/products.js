const express = require("express");
// const products = require("../models/product");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after);
    let sql = {};
    if (after) {
      sql = {
        where: {
          id: {
            [Op.get]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }
    const products = await product.findAll()
  } catch (err) {}
});

console.log(module.exports);
module.exports = productsRouter = router;
