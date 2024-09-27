import { Bar } from "react-chartjs-2";

const HorizontalBarChart = ({ data }) => {
   const names = data.map((item) => item.name);
   const averageQuestions = data.map((item) => item.averageQuestions);
   const chartData = {
      labels: names,
      datasets: [
         {
            axis: "y",
            label: "Average Questions Per Meeting",
            data: [...averageQuestions, Math.max(...averageQuestions) + 5],
            backgroundColor: ["#263e4a", "#263e4a"],
            borderWidth: 0,
         },
      ],
   };
   const chartOptions = {
      indexAxis: "y",
      plugins: {
         legend: {
            display: false,
         },
         title: {
            display: true,
            text: "Average Questions Per Meeting",
         },
      },
      scales: {
         x: {
            grid: {
               display: false,
            },
         },
      },
   };
   return (
      <div className="py-20 px-10 border rounded-2xl bg-white">
         <Bar data={chartData} options={chartOptions} />
      </div>
   );
};

export default HorizontalBarChart;
