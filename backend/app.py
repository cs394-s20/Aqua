from flask import Flask, request, jsonify
from recipeApi import RecipeGrabber
from recipeApi.Transform import *

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/get_recipe')
def get_recipe():
    recipe_id = request.args.get("recipeId")
    vegetarian = request.args.get("vegetarian")
    servings = int(request.args.get("servings"))

    recipe = RecipeGrabber.GrabFromRemote("https://www.allrecipes.com/recipe/" + str(recipe_id) + "/")
    multiplier = servings / recipe.servings
    if vegetarian == "true":
        recipe = ToVegetarian(recipe)
    recipe.change_servings(multiplier)

    return jsonify(recipe.serialize())


if __name__ == '__main__':
    app.run()
