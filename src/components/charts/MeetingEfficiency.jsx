import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";

function MeetingVolumeAndTimeEfficiencyChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Muhammadali", "Sienna", "Andrew"],
    datasets: [
      {
        backgroundColor: "#505BC5",
        label: "New",
        data: [5, 4, 6],
        borderWidth: 1
      },
      {
        label: "Follow-up",
        data: [5, 6, 5],
        backgroundColor: "#848FF5",
        borderWidth: 1
      }
    ]
  };

  const options = {
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
      y: {
        beginAtZero: true,
        max: 12,
        stacked: true,
        grid: {
          display: false
        }
      },
      x: {
        stacked: true,
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="h-96 w-full bg-white rounded-[6px] border border-[#E4E7EC] p-4">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}

export default MeetingVolumeAndTimeEfficiencyChart;
