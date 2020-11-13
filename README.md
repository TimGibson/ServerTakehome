# ServerTakehome

## Installation

```
npm install
```

## Usage

```
npm start
```

### Get all recipes
```
curl localhost:3000/recipe
```

### Delete recipe
```
curl --data "name=nameOfRecipe" localhost:3000/recipe
```
### Update/Add new recipe
```
curl --data "name=nameOfRecipe&instruction=insctruction...&ingredients='tomatoes strawberries'" localhost:3000/recipe
```

