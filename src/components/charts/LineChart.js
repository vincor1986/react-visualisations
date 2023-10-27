import { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
} from "chart.js";

const CHART_DATA_ORIGIN = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 22 },
  { year: 2017, count: 34 },
  { year: 2018, count: 32 },
  { year: 2019, count: 39 },
  { year: 2020, count: 42 },
  { year: 2021, count: 38 },
  { year: 2022, count: 44 },
];

const CHART_DATA_ORIGIN_2 = [
  { year: 2010, count: 5 },
  { year: 2011, count: 15 },
  { year: 2012, count: 8 },
  { year: 2013, count: 33 },
  { year: 2014, count: 24 },
  { year: 2015, count: 18 },
  { year: 2016, count: 25 },
  { year: 2017, count: 26 },
  { year: 2018, count: 31 },
  { year: 2019, count: 28 },
  { year: 2020, count: 33 },
  { year: 2021, count: 36 },
  { year: 2022, count: 28 },
];

const CHART_OPTIONS = {};
CHART_OPTIONS.scales = {
  x: { grid: { display: false }, border: { display: false } },
  y: { border: { display: false } },
};
CHART_OPTIONS.elements = { line: { borderWidth: 2 } };
CHART_OPTIONS.maintainAspectRatio = false;

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: CHART_DATA_ORIGIN.map((row) => row.year),
    datasets: [
      {
        id: 0,
        label: "Acquisitions by year",
        data: CHART_DATA_ORIGIN.map((row) => row.count * 1000),
        borderColor: "darkblue",
        tension: 0.35,
        pointStyle: false,
      },
      {
        id: 1,
        label: "Acquisitions by year",
        data: CHART_DATA_ORIGIN_2.map((row) => row.count * 1000),
        borderColor: "darkblue",
        borderDash: [3, 3],
        tension: 0.35,
        pointStyle: false,
      },
    ],
  });

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  );

  const updateChart = () => {
    const dataLength = CHART_DATA_ORIGIN.length;
    const randomNumbers = [];
    for (let i = 0; i < dataLength * 2; i++) {
      const modifier = i >= dataLength ? i - dataLength : i;
      randomNumbers.push(
        (modifier + Math.round(Math.random() * 10) + 10) * 1000
      );
    }
    setChartData((prev) => {
      let newData = JSON.parse(JSON.stringify(prev));
      newData.datasets[1].data = randomNumbers.slice(0, dataLength);
      newData.datasets[0].data = randomNumbers.slice(dataLength);

      return newData;
    });
  };

  return (
    <div className="bg-white w-100% h-fit lg:h-96 relative lg:p-8">
      <Line
        datasetIdKey="acquisitions"
        data={chartData}
        options={CHART_OPTIONS}
        className="w-100% h-100% min-w-max min-h-max"
      />
      <button
        className="absolute -bottom-12 right-1 px-4 py-2 bg-purple-900 text-white rounded-md cursor-pointer hover:bg-purple-800 z-10 transition-all active:translate-y-1 duration-250"
        onClick={updateChart}
      >
        Randomize
      </button>
    </div>
  );
};

export default LineChart;
