import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const index = 1;

const IngredientList = ({ingredients}) => (
  <ListGroup as="ul">
    {ingredients.map((ingredient) => {
      return (
        <ListGroup.Item as="li">
          {ingredient["quantity"] == 0 ? ("") : (ingredient["quantity"] + " " + ingredient["measurement"] + " of ")}{ingredient["ingredient"]}
        </ListGroup.Item>
      )
    })}
  </ListGroup>
);

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      recipe: {
        'title': "",
        'ingredients': []
      },
      recipeId: 279536,
      vegetarian: true,
      servings: 5
    };
  }
  componentDidMount() {
      fetch('/get_recipe?recipeId=' + this.state.recipeId + '&vegetarian=' + this.state.vegetarian + '&servings=' + this.state.servings, {
      mode: 'no-cors',
    }).then(res => res.json()).then((data) => {
      this.setState({
        recipe: data
      });
    });
    // this.setState({
    //   recipeName: "Chocolate-spread Pancake Recipe",
    //   ingredients: [
    //     {
    //       "item": "chocolate hazelnut spread (Recommended: Nutella)",
    //       "amount": 1,
    //       "measurement": "cup"
    //     },
    //     {
    //       "item": "eggs",
    //       "amount": 2,
    //       "measurement": null
    //     },
    //     {
    //       "item": "milk",
    //       "amount": 1,
    //       "measurement": "cup"
    //     },
    //     {
    //       "item": "salt",
    //       "amount": 1,
    //       "measurement": "pinch"
    //     },
    //     {
    //       "item": "vegetable oil (Recommended: Olive Oil)",
    //       "amount": 2.5,
    //       "measurement": "teaspoons"
    //     },
    //     {
    //       "item": "all-purpose flour",
    //       "amount": 0.666,
    //       "measurement": "cup"
    //     }
    //   ]
    // })
  }

  render()
  {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {this.state.recipe['title']}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <IngredientList ingredients ={this.state.recipe['ingredients']}/>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  How many servings per recipe?
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    )
  };
}

export default App;





function createShoppingCart() {
  alert('You pressed the first button.')
}
