import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    borderSkipped: false,
    layout: {
      padding: {
        top: 30
      }
    },
    plugins: {
      legend: {
        display: false,
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
    labels: ["Muhammadali", "Sienna", "Andrew"],
    datasets: [
      {
        label: "Muhammadali",
        backgroundColor: "#505BC5",
        borderWidth: 0,
        data: [500, 200, 800],
        hoverBackgroundColor: "#505BC5",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0
        },
        barPercentage: 1,
        barThickness: 24
      },
      {
        label: "Sienna",
        backgroundColor: "#848FF5",
        borderWidth: 0,
        data: [700, 500, 300],
        hoverBackgroundColor: "#848FF5",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0
        },
        barPercentage: 1,
        barThickness: 24
      },
      {
        label: "Andrew",
        backgroundColor: "#CACFFF",
        borderWidth: 0,
        data: [600, 300, 400],
        hoverBackgroundColor: "#CACFFF",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0
        },
        barPercentage: 1,
        barThickness: 24
      }
    ]
  };
  return (
    <div className="h-96 w-full bg-white rounded-[6px] border border-[#E4E7EC] p-4">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
