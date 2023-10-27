import "./App.css";
import { Fragment } from "react";

import Navbar from "./components/navbar/Navbar";
import LineChart from "./components/charts/LineChart";
import Card from "./components/layout/Card";
import CardContainer from "./components/layout/CardContainer";
import DoughnutChart from "./components/charts/DoughnutChart";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CardContainer>
        <Card title="Line chart 1" size={2}>
          <LineChart />
        </Card>
        <Card title="Doughnut chart 1" size={1}>
          <DoughnutChart />
        </Card>
      </CardContainer>
    </Fragment>
  );
};

export default App;
