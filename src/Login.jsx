import React, { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Fragment>
      <Container className="my-4">
        <Row>
          <div className="container contact-form m-t-20">
            <Form>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="input"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
