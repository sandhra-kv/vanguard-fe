import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";

function TeamCommunicationChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Muhammadal", "Sienna", "Andrew"],
    datasets: [
      {
        label: "Rep",
        data: [30, 70, 60],
        backgroundColor: "#505BC5"
      },
      {
        label: "Client",
        data: [10, 20, 30],
        backgroundColor: "#848FF5"
      }
    ]
  };

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

  return (
    <div className="h-96 w-full bg-white rounded-[6px] border border-[#E4E7EC] p-4">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}

export default TeamCommunicationChart;
