import React, { Fragment, Component } from "react";
import { CardGroup } from "react-bootstrap";
import Rechart from "./Rechart";

class RechartCard extends Component {
  render() {
    return (
      <Fragment>
        <CardGroup>
          <Rechart />
        </CardGroup>
      </Fragment>
    );
  }
}

export default RechartCard;
