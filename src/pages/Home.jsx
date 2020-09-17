import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./Home.module.css";

export default () => (
  <Container className={styles.home}>
    <h1>Matchmaker</h1>
    <p>
      A simple match-making app meant as a basis for realtime apps such as chat
      rooms and minigames.
    </p>
    <Form>
      <InputGroup>
        <Form.Control
          aria-label="Room ID"
          type="text"
          placeholder="Enter room ID"
        />
        <InputGroup.Append>
          <Button variant="secondary" block>
            Join
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
    <Row>
      <Col>
        <hr />
      </Col>
      <Col xs="auto" sm="auto">
        or
      </Col>
      <Col>
        <hr />
      </Col>
    </Row>
    <Button variant="primary" block>
      Create a room
    </Button>
  </Container>
);
