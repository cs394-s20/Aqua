import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


// const index = 1;

const IngredientList = ({ ingredients }) => (
  <ListGroup as="ul">
    {ingredients.map((ingredient) => {
      return (
        <ListGroup.Item as="li">
          {ingredient["amount"]} {ingredient["measurement"]} {ingredient["item"]}
        </ListGroup.Item>
      )
    })}
  </ListGroup>
);

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: {},
      recipeName: "",
      ingredients: []
    };
  }
  componentDidMount() {
    //   fetch('/get_recipes', {
    //   mode: 'no-cors',
    //   recipeId: '20995',
    // }).then(res => res.json()).then((data) => {
    //   this.setState({
    //     recipe: data[index],
    //     recipeName: data[index]["name"],
    //     ingredients: data[index]["ingredients"]
    //   });
    // });
    this.setState({
      recipeName: "Chocolate-spread Pancake Recipe",
      ingredients: [
        {
          "item": "chocolate hazelnut spread (Recommended: Nutella)",
          "amount": 1,
          "measurement": "cup"
        },
        {
          "item": "eggs",
          "amount": 2,
          "measurement": null
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
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='navig'>
          <Navbar bg="dark" variant="dark" className='navig'>
            <Navbar.Brand href="#recipe">EasyHealthy</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#recipe">Recipe</Nav.Link>
              <Nav.Link href="#shoppingcart">ShoppingCart</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {this.state.recipeName}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <IngredientList ingredients={this.state.ingredients} />
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    How many servings per recipe?
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                    <Dropdown.Item >5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  };
}

export default Home;


function createShoppingCart() {
  alert('You pressed the first button.')
}
