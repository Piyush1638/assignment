import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  distribution,
}: {
  distribution: { label: string; percentage: number }[];
}) => {
  const data = {
    labels: distribution.map((item) => `${item.label}: ${item.percentage}%`),
    datasets: [
      {
        data: distribution.map((item) => item.percentage),
        backgroundColor: ["#4285F4", "#F4B400", "#34A853", "#EA4335"],
        hoverBackgroundColor: ["#4285F4", "#F4B400", "#34A853", "#EA4335"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
            color: "black",
            fontWeight: "bold",
          },
        },
      },
      datalabels: {
        display: false, // Remove labels from doughnut chart
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
    layout: {
      padding: 0, // Remove all extra space around the chart
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[400px] h-[400px] p-0">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
