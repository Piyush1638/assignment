import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartOptions,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const AnalyticsEstimateGraph: React.FC = () => {
  const doughnutData = {
    labels: ["Buy Percentage"],
    datasets: [
      {
        data: [76, 24],
        backgroundColor: ["#d4f8e8"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "0%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
      datalabels: {
        display: false, // Remove labels from doughnut chart
      },
    },
  };

  const barData = {
    labels: ["Buy", "Hold", "Sell"],
    datasets: [
      {
        data: [76, 8, 16],
        backgroundColor: ["#28a745", "#d6d6d6", "#d9534f"],
        borderRadius: 5,
        barThickness: 15,
      },
    ],
  };

  const barOptions: ChartOptions<"bar"> = {
    indexAxis: "y", // Specify horizontal orientation
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 14 },
          color: "#6c757d",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
      legend: { display: false },
      datalabels: {
        display: true, 
        anchor: "end",
        align: "end",
        formatter: (value: number) => `${value}%`,
        color: "#000",
        font: {
          size: 12,
        },
        offset: 5,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex items-center space-x-8">
      {/* Doughnut Chart */}
      <div className="relative w-36 h-36">
        <Doughnut data={doughnutData} options={doughnutOptions} />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-2xl font-semibold text-green-600">76%</span>
        </div>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="w-3/4">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default AnalyticsEstimateGraph;
