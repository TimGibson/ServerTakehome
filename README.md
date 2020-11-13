# ServerTakehome

# ClientTakehome

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
curl localhost:3000
```

### Delete recipes
```
curl --data "name=nameOfRecipe" localhost:3000
```
### Update/Add new recipe
```
curl --data "name=nameOfRecipe&instruction=insctruction...&ingredients='tomatoes strawberries'" localhost:3000
```

