import {
  CategoryScale,
  Chart as ChartJs,
  BarElement,
  LinearScale
} from "chart.js";
import { Bar } from "react-chartjs-2";
import RadarChart from "../components/RadarChart";
import Profile from "../components/Profile";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const Appointments = () => {
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
        position: 'bottom',
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
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Legend 1",
        backgroundColor: "#505BC5",
        borderWidth: 0,
        data: [500, 200, 800, 700, 300, 500, 600, 700],
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
        label: "Legend 2",
        backgroundColor: "#848FF5",
        borderWidth: 0,
        data: [700, 500, 300, 600, 900, 700, 400, 600],
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
        label: "Legend 3",
        backgroundColor: "#CACFFF",
        borderWidth: 0,
        data: [600, 300, 400, 600, 700, 700, 300, 600],
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

  const radarChartData = {
    labels: [
      "Relationship Building",
      "Time Management",
      "Objection Handling",
      "Negotiation",
      "Closing Techniques"
    ],
    datasets: [
      {
        data: [50, 75, 91, 100, 50],
        borderColor: "#505BC5",
        backgroundColor: "rgba(80,91,197,0.25)",
        borderWidth: 3,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointBorderColor: "#FFFFFF",
        pointBackgroundColor: "#000000"
      }
    ]
  };

  const radarChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        backgroundColor: "#D9DCFF",
        angleLines: {
          display: true,
          lineWidth: 2,
          color: "#FFFFFF"
        },
        grid: {
          display: true,
          lineWidth: 2,
          color: "#FFFFFF",
          circular: true
        },
        ticks: {
          display: true,
          stepSize: 25,
          color: "#505BC5"
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 500,
            family: "Manrope"
          },
          color: "#3C3C3C"
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div>
      <div className="w-1/2 h-96 bg-white rounded-[6px] border border-[#E4E7EC] p-4">
        <Bar options={options} data={data} />
      </div>
      <div className="w-1/2 h-[280px]">
        <RadarChart
          chartData={radarChartData}
          chartOptions={radarChartOptions}
        />
      </div>
       <Profile
        name="Cizil Maria"
        email="cizil@keycode.com"
        url="cizil@keycode.com"
        phone="08168141116"
        date="Friday, Sept 25, 2025"
      />
    </div>
  );
};

export default Appointments;
