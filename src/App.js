import React from "react";
import "./styles.css";
import { Card, Container, Jumbotron } from "react-bootstrap";

import RechartCard from "./components/RechartCard";

export default function App() {
  return (
    <Container>
      <Jumbotron>
        <h4>Demo</h4>
        <RechartCard />
      </Jumbotron>
    </Container>
  );
}
