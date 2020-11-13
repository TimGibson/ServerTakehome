var express = require('express');
var router = express.Router();

var recipes = {
  EggsBenedict: {
    name: "EggsBenedict",
    instruction: "cook it",
    ingredients: "yogurt, mushrooms, soy sauce, refried beans"
  },
  RealSalad: {
    name: "RealSalad",
    instruction: "mix it",
    ingredients: "lettuce, salami?, celery, corn"
  }
}

router.get('/', function(req, res, next) {
  res.send(Object.values(recipes));
});

router.post('/', function(req, res, next) {
  console.log(Object.keys(req.body).length)
  let name = req.body.name
  // Delete
  if (Object.keys(req.body).length == 1){
    delete recipes[name]
    res.send("Recipe deleted!");
  // Update or add New
  } else {
    recipes[name] = { ...req.body }
    res.send("Recipe added/updated!")
  }

});

module.exports = router;
