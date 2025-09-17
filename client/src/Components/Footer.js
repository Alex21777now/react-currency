import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";


export default class Footer extends Component {
  render() {
    return (
      <>
      <div>
         &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
        <Navbar collapseOnSelect expand="md"  bg="dark" variant="dark" /*style={{ background: '#290410'}}*/>
          <Container>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/"> home </Nav.Link>
                <Nav.Link href="/about"> about </Nav.Link>
               {/* <Nav.Link href="/contacts"> contacts </Nav.Link>
                <Nav.Link href="/blog"> blog </Nav.Link>*/}
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>


     </>
    );
  }
}