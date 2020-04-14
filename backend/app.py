from flask import Flask, request
from recipeApi import RecipeGrabber

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/get_recipes')
def get_recipes():
    recipeId = request.headers['recipeId']
    print(recipeId)
    print(RecipeGrabber.GrabFromRemote("https://www.allrecipes.com/recipe/20995/"))

    return {
  0:{
    "name": "Chocolate-spread Pancake Recipe",
    "ingredients":
    [
      {
        "item": "chocolate hazelnut spread (Recommended: Nutella)",
        "amount": 1,
        "measurement": "cup"
      },
      {
        "item": "eggs",
        "amount": 2,
        "measurement": None
      },
      {
        "item": "milk",
        "amount": 1,
        "measurement": "cup"
      },
      {
        "item": "salt",
        "amount": 1,
        "measurement": "pinch"
      },
      {
        "item": "vegetable oil (Recommended: Olive Oil)",
        "amount": 2.5,
        "measurement": "teaspoons"
      },
      {
        "item": "all-purpose flour",
        "amount": 0.666,
        "measurement": "cup"
      }
    ]
  },
      1: {
        "name": "Choqge Recipe",
        "ingredients":
          [
            {
              "item": "chocolqgqrgended: Nutella)",
              "amount": 124,
              "measurement": "cup"
            },
            {
              "item": "qrggrq",
              "amount": 226,
              "measurement": None
            }
          ]
      }
}



if __name__ == '__main__':
    app.run()
