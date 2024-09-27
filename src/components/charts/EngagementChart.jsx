import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";

function EngagementChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Muhammadal", "Sienna", "Andrew"],
    datasets: [
      {
        label: "label1",
        data: [100, 20, 130],
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

  return (
    <div className="h-96 w-full bg-white rounded-[6px] border border-[#E4E7EC] p-4">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}

export default EngagementChart;
