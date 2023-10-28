import "./App.css";
import { Fragment } from "react";

import Navbar from "./components/navbar/Navbar";
import LineChart from "./components/charts/LineChart";
import Card from "./components/layout/Card";
import CardContainer from "./components/layout/CardContainer";
import DoughnutChart from "./components/charts/DoughnutChart";
import BarChart from "./components/charts/BarChart";
import SmallCard from "./components/layout/SmallCard";
import Sparkline from "./components/charts/Sparkline";
import BarChart2 from "./components/charts/BarChart2";
import AreaChart from "./components/charts/AreaChart";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CardContainer>
        <Card title="Line chart 1">
          <LineChart />
        </Card>
        <SmallCard title="Doughnut chart 1">
          <DoughnutChart />
        </SmallCard>
        <SmallCard title="Sparkline 1">
          <Sparkline />
          <Sparkline version={1} />
        </SmallCard>
        <SmallCard title="Bar Chart (Vertical)">
          <BarChart2 />
        </SmallCard>
        <SmallCard title="Financial Chart">
          <AreaChart />
        </SmallCard>
        <Card title="Bar chart (Horizontal)">
          <BarChart />
        </Card>
      </CardContainer>
    </Fragment>
  );
};

export default App;
