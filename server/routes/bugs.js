var db = require("../db/db");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const sql = "select * from bugs";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

router.put("/:id", function (req, res, next) {
  console.log(`update ${req.params.id} ${req.body.status}`);
  let sql = `UPDATE bugs
            SET status = ?
            WHERE id = ?`;

  db.all(sql, [req.body.status, req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).send();
  });

});

module.exports = router;
