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
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Total",
      data: [95, 75, 64, 82, 106, 123, 69],
      borderWidth: 1,
      borderColor: (ctx) => {
        const index = ctx.index;
        return index % 2 == 0 ? "rgb(240 249 255)" : "#36d699";
      },
      backgroundColor: (ctx) => {
        const index = ctx.index;
        return index % 2 == 0 ? "#26325c" : "#36d699";
      },
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
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const BarChart2 = () => {
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
      <Bar data={chartData} options={CHART_OPTIONS} className="h-100" />
      <RandomBtn updateFunction={updateChart} />
    </div>
  );
};

export default BarChart2;
