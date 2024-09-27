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
        backgroundColor: ["#CACFFF", "#CACFFF"],
        borderWidth: 0
      }
    ]
  };
  const chartOptions = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Average Questions Per Meeting"
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
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default HorizontalBarChart;
