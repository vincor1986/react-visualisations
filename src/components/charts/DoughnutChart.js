import { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Legend,
  PointElement,
  Tooltip,
} from "chart.js";

import useScreenWidth from "../../hooks/useScreenWidth";
import RandomBtn from "../ui/RandomBtn";

const CHART_DATA_ORIGIN = [
  { product: "Laptop/Computer", value: 16 },
  { product: "Smartphone", value: 54 },
  { product: "Tablet", value: 30 },
];

const CHART_DATA = {
  labels: CHART_DATA_ORIGIN.map((obj) => obj.product),
  datasets: [
    {
      label: "Percentage",
      data: CHART_DATA_ORIGIN.map((obj) => obj.value),
      backgroundColor: ["#2d3863", "#31597e", "#7294d3"],
      hoverOffset: 4,
    },
  ],
};

const CHART_OPTIONS = {
  cutout: "75%",
  tooltips: {
    shadowOffsetX: 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    bevelWidth: 1,
    boxColor: "rgba(0, 0, 0, 0.8)",
  },
  elements: {
    arc: {
      borderWidth: 5,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const DoughnutChart = () => {
  const [chartData, setChartData] = useState(CHART_DATA);
  const [chartOptions, setChartOptions] = useState(CHART_OPTIONS);
  const screenSize = useScreenWidth();

  useEffect(() => {
    const legendPos = screenSize <= 767 ? "top" : "bottom";
    setChartOptions((prev) => {
      let newOptions = JSON.parse(JSON.stringify(prev));
      newOptions.plugins.legend.position = legendPos;
      return newOptions;
    });
  }, [screenSize]);

  const updateChart = () => {
    let randomNumbers = [],
      remaining = 100;
    for (let i = 0; i < CHART_DATA_ORIGIN.length - 1; i++) {
      randomNumbers.push(Math.round(Math.random() * 50));
    }
    randomNumbers.push(remaining - randomNumbers.reduce((a, b) => a + b));

    setChartData((prev) => {
      let newData = JSON.parse(JSON.stringify(prev));
      newData.datasets[0].data = [...randomNumbers];
      return newData;
    });
  };

  Chart.register(DoughnutController, ArcElement, Legend, PointElement, Tooltip);

  return (
    <div className="bg-white w-100% h-fit lg:h-96 relative lg:p-8">
      <Doughnut
        datasetKeyId="products"
        data={chartData}
        options={chartOptions}
        className="m-auto"
      />
      <RandomBtn updateFunction={updateChart} />
    </div>
  );
};

export default DoughnutChart;
