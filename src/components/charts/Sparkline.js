import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

const CHART_DATA = {
  labels: Array.from({ length: 10 }, (_, i) => i + 1),
  datasets: [
    {
      label: "sales",
      data: [],
      borderColor: "darkblue",
      tension: 0.5,
      pointStyle: false,
    },
  ],
};

const CHART_OPTIONS = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
};

const Sparkline = ({ version }) => {
  const [chartData, setChartData] = useState(CHART_DATA);

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  );

  useEffect(() => {
    setChartData((prev) => {
      let newData = JSON.parse(JSON.stringify(prev));
      newData.datasets[0].data = Array.from(
        { length: 10 },
        (_, i) => Math.round(Math.random() * 10) + i
      );
      if (version == 1) {
        newData.datasets[0].borderColor = "#36d699";
      } else if (version == 2) {
        newData.datasets[0].borderColor = "red";
      }
      return newData;
    });
  }, []);

  return (
    <div className="bg-white w-100% h-1/2 relative border-b border-l lg:p-4 mb-4">
      <Line data={chartData} options={CHART_OPTIONS} />
    </div>
  );
};

export default Sparkline;
