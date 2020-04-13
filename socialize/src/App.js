import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class App extends React.Component{
  render()
  {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Chocolate-spread Pancake Recipe
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup as="ul">
                <ListGroup.Item as="li" >
                  1 cup chocolate hazelnut spread (Recommended: Nutella)
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" >
                  2 eggs
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  1 cup of milk
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  1 pinch salt
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  1 + 1/2 teaspoons of vegetable oil (Recommended: Olive Oil)
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  2/3 of a cup of all-purpose flour
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    )
  };
}

export default App;




