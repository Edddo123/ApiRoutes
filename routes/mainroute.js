const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", async (req, res, next) => {
    return res.send('<h1>Do u lift bro</h1>')
  });
router.get("/dbInfo", async (req, res, next) => {
  const results = await db.query("SELECT * FROM apis");
  return res.json(results.rows);
});

router.post("/addToDb", async (req, res, next) => {
  const { toInsert } = req.body;
  await db.query('INSERT INTO apis("Values") VALUES($1)', [toInsert]);
  return res.json({ message: "success" });
});

module.exports = router;
