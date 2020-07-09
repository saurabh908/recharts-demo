import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Card } from "react-bootstrap";

const data = [
  {
    name: "Fri",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Sat",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Sun",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Mon",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Tue",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Wed",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Today",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const MixedBarChart = () => {
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        // margin={{
        //   top: 20,
        //   right: 30,
        //   left: 20,
        //   bottom: 5
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

const StackedBarChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default class Rechart extends PureComponent {
  render() {
    return (
      <div>
        <Card style={{ width: "35rem", height: "30rem" }}>
          <Card.Header>{this.props.barTitle}</Card.Header>
          <Card.Body>
            <MixedBarChart />
          </Card.Body>
        </Card>

        <Card style={{ width: "35rem", height: "30rem" }}>
          <Card.Header>{this.props.barTitle}</Card.Header>
          <Card.Body>
            <StackedBarChart />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
