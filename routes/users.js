var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await db.all('SELECT id, name, email FROM users ORDER BY id DESC');
    // Return JSON by default; if you want to render a view change this to res.render(...)
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
