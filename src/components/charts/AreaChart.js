import { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";
import RandomBtn from "../ui/RandomBtn";

const BASE_PRICE = 95;

const CHART_DATA = {
  labels: ["25/10", "26/10", "27/10", "28/10", "29/10", "30/10", "31/10"],
  datasets: [
    {
      label: "ROI",
      data: Array.from(
        { length: 7 },
        (_) => BASE_PRICE + (Math.round(Math.random() * 10) - 5)
      ),
      borderColor: "#7294d3",
      fill: true,
      backgroundColor: "#7294d333",
      pointStyle: false,
    },
  ],
};

const CHART_OPTIONS = {
  scales: {
    x: {
      grid: {
        display: true,
      },
      border: {
        display: true,
      },
    },
    y: {
      border: {
        display: true,
      },
      grace: 10,
      ticks: {
        crossAlign: "far",
      },
      position: "right",
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const AreaChart = () => {
  const [chartData, setChartData] = useState(CHART_DATA);

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler
  );

  const updateChart = () => {
    setChartData((prev) => {
      let newData = JSON.parse(JSON.stringify(prev));
      newData.datasets[0].data = Array.from(
        { length: 7 },
        () => BASE_PRICE + (Math.round(Math.random() * 10) - 5)
      );
      return newData;
    });
  };

  return (
    <div className="bg-white w-100% h-fit lg:h-96 relative lg:p-8">
      <Line data={chartData} options={CHART_OPTIONS} />
      <RandomBtn updateFunction={updateChart} />
    </div>
  );
};

export default AreaChart;
