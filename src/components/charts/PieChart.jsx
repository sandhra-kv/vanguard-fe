import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartData = {
    labels: [
      "Product Inventory & Supply Chain",
      "Pricing & Promotions",
      "Customer Experience & Engagement",
      "Sales Performance & Metrics",
      "Technology & Automation Solutions",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [40, 20, 15, 10, 15],
        backgroundColor: [
          "#505BC5",
          "#848FF5",
          "#CACFFF",
          "#3F47A1",
          "#6A74D1",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-60 h-60">
      <Pie data={chartData} options={chartOptions} width={240} height={240} />
    </div>
  );
};

export default PieChart;
