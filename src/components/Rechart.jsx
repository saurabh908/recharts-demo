import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  Line
} from "recharts";
import { Card } from "react-bootstrap";

const data = [
  {
    name: "Fri",
    complete: 50,
    urgent: 14
  },
  {
    name: "Sat",
    complete: 40,
    urgent: 25
  },
  {
    name: "Sun",
    complete: 20,
    urgent: 10
  },
  {
    name: "Mon",
    complete: 70,
    urgent: 30
  },
  {
    name: "Tue",
    complete: 60,
    urgent: 40
  },
  {
    name: "Wed",
    complete: 80,
    urgent: 50
  },
  {
    name: "Today",
    complete: 50,
    urgent: 14
  }
];

const MixedBarChart = () => {
  return (
    <div>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="complete" fill="rgba(55, 146, 203,1)" />
        <Bar dataKey="urgent" fill="rgba(242,115,96,1)" />
      </BarChart>
    </div>
  );
};

const StackedBarChart = () => {
  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="complete" stackId="a" fill="rgba(55, 146, 203,1)" />
      <Bar dataKey="urgent" stackId="a" fill="rgba(242,115,96,1)" />
    </BarChart>
  );
};

const ComposedChart = () => {
  return (
    <ComposedChart width={400} height={300} data={data}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      {/* <Bar dataKey="complete" barSize={20} fill="#413ea0" /> */}

      <Bar dataKey="complete" fill="rgba(55, 146, 203,1)" />
      <Bar dataKey="urgent" fill="rgba(242,115,96,1)" />
      {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
  );
};

export default class Rechart extends PureComponent {
  render() {
    return (
      <div>
        <Card style={{ width: "28rem", height: "24rem" }}>
          <Card.Header>Completed and Urgent Tasks</Card.Header>
          <Card.Body>
            <MixedBarChart />
          </Card.Body>
        </Card>
        &nbsp;
        <Card style={{ width: "28rem", height: "24rem" }}>
          <Card.Header>Completed and Urgent Stacked Tasks</Card.Header>
          <Card.Body>
            <StackedBarChart />
          </Card.Body>
        </Card>
        &nbsp;
        <Card style={{ width: "28rem", height: "24rem" }}>
          <Card.Header>Composed Completed and Urgent Tasks</Card.Header>
          <Card.Body>
            <ComposedChart />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
