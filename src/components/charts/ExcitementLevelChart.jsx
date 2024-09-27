import React from "react";
import { Bar, Line } from "react-chartjs-2";

const ExcitementLevelChart = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    borderSkipped: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true
      }
    }
  };

  const data = {
    labels: [
      "Discovery",
      "Qualification",
      "Proposal",
      "Negotiation",
      "Closing"
    ],
    datasets: [
      {
        label: "Muhammadali",
        data: [60, 65, 70, 75, 70],
        fill: false,
        borderColor: "#505BC5",
        tension: 0.4
      },
      {
        label: "Siena",
        data: [65, 70, 65, 60, 65],
        fill: false,
        borderColor: "#848FF5",
        tension: 0.4
      },
      {
        label: "Andrew",
        data: [70, 75, 70, 75, 80],
        fill: false,
        borderColor: "#CACFFF",
        tension: 0.4
      }
    ]
  };
  return (
    <div className="h-96 w-full bg-white rounded-[6px] border border-[#E4E7EC] p-4">
      <Line options={options} data={data} />
    </div>
  );
};

export default ExcitementLevelChart;
