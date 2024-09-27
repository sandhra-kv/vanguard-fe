import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutCenterLabel = {
   id: "doughnutCenterLabel",
   beforeDraw: (chart) => {
      const {
         ctx,
         chartArea: { top, bottom, left, right, width, height },
      } = chart;
      const value = chart.config.data.datasets[0].data[1];
      ctx.save();
      ctx.font = "bold 24px Arial";
      ctx.fillStyle = "#344357";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${value}%`, left + width / 2, top + height / 2);
      ctx.restore();
   },
};

ChartJS.register(doughnutCenterLabel);

const DoughnutChart = ({ value }) => {
   const chartData = {
      labels: ["Analytics"],
      datasets: [
         {
            label: "Analytics",
            data: [100 - value, value],
            backgroundColor: ["#E9EDF7", "#505BC5"],
            borderWidth: 0,
         },
      ],
   };

   const chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      cutout: 57,
      rotation: Math.PI / 2,
      plugins: {
         legend: {
            display: false,
         },
         tooltip: {
            enabled: false,
         },
      },
   };

   return (
      <div className="size-36">
         <Doughnut data={chartData} options={chartOptions} width={144} height={144} />
      </div>
   );
};

export default DoughnutChart;
