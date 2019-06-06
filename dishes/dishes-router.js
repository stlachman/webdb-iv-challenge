const router = require("express").Router();

const Dishes = require("./dishes-model.js");

router.get("/", (req, res) => {
  Dishes.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
