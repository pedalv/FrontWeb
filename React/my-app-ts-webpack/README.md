## App for å teste
- React 16.5.2
- Webpack 4.19.1
- Typescript 3.0.3
- Jest 23.6.0
- Enzyme 3.6.0

## TODO
- https://www.techiediaries.com/react-bootstrap/

Command
> npm install --save bootstrap reactstrap@next

> import 'bootstrap/dist/css/bootstrap.css';

```javascript
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to React</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    View Reactstrap Docs
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
```
