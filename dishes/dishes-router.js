const router = require("express").Router();

const Dishes = require("./dishes-model.js");

router.post("/", (req, res) => {
  const newDish = req.body;
  Dishes.addDish(newDish)
    .then(dish => {
      res.status(201).json(dish);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

router.get("/", (req, res) => {
  Dishes.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Dishes.getDish(id)
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
