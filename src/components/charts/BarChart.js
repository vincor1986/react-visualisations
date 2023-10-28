import { useState } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import RandomBtn from "../ui/RandomBtn";

const CHART_DATA = {
  labels: ["PC", "Laptop", "Smartphone", "Tablet", "Smartwatch"],
  datasets: [
    {
      label: "Sales by Product Type",
      data: [15, 25, 64, 42, 16],
      backgroundColor: [
        "#e2676333",
        "#e4b25433",
        "#7294d333",
        "#31597e33",
        "#36d69933",
      ],
      borderColor: ["#e26763", "#e4b254", "#7294d3", "#31597e", "#36d699"],
      borderWidth: 1,
    },
  ],
};

const CHART_OPTIONS = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = () => {
  const [chartData, setChartData] = useState(CHART_DATA);

  Chart.register(BarController, BarElement, CategoryScale, LinearScale);

  const updateChart = () => {
    const randomNumbers = [];
    const dataLength = chartData.datasets[0].data.length;
    for (let i = 0; i < dataLength; i++) {
      randomNumbers.push(Math.round(Math.random() * 50));
    }
    setChartData((prev) => {
      let newData = JSON.parse(JSON.stringify(prev));
      newData.datasets[0].data = randomNumbers;
      return newData;
    });
  };

  return (
    <div className="bg-white w-100% h-fit lg:h-96 relative lg:p-8">
      <Bar data={chartData} options={CHART_OPTIONS} />
      <RandomBtn updateFunction={updateChart} />
    </div>
  );
};

export default BarChart;
