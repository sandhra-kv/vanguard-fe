import {
  CategoryScale,
  Chart as ChartJs,
  BarElement,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import RadarChart from "../components/RadarChart";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const Appointments = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    borderSkipped: false,
    layout: {
      padding: {
        top: 30,
      },
    },
    // plugins: {
    //   legend: {
    //     display: false
    //   },
    //   tooltip: {
    //     intersect: false,
    //     filter(tooltipItem: TooltipItem<'bar'>) {
    //       return tooltipItem.datasetIndex === 0;
    //     },
    //     callbacks: {
    //       title: () => ''
    //     },
    //     displayColors: false,
    //     backgroundColor: '#1E1B39',
    //     padding: {
    //       left: 12,
    //       right: 12,
    //       top: 5,
    //       bottom: 5
    //     },
    //     bodyFont: { size: 14, weight: '500' },
    //     yAlign: 'bottom' as const
    //   }
    // },
    // scales: {
    //   x: {
    //     border: {
    //       display: false
    //     },
    //     stacked: true,
    //     grid: {
    //       display: false
    //     },
    //     ticks: {
    //       color: '#6D6D6D',
    //       font: {
    //         size: 14
    //       },
    //       callback: (index: string) => {
    //         const maxLabelWidth = 100; // Maximum available width for label in pixels
    //         const label = data?.labels?.[index];

    //         const canvas = document.createElement('canvas');
    //         const ctx = canvas.getContext('2d');

    //         if (ctx) {
    //           ctx.font = '14px Arial';
    //           const labelWidth = ctx.measureText(label).width;

    //           if (labelWidth > maxLabelWidth) {
    //             const truncatedLabel = `${label.slice(
    //               0,
    //               Math.floor(maxLabelWidth / (labelWidth / label.length))
    //             )}...`;
    //             return truncatedLabel;
    //           }
    //         }

    //         return label;
    //       }
    //     }
    //   },
    //   y: {
    //     stacked: true,
    //     max: maxDataValue,
    //     display: false
    //   }
    // }
  };

  const data = {
    labels: [
      "Absence of OB",
      "Closeness",
      "Credibility",
      "Heritage",
      "M Disclosure",
      "Provenance",
      "Reliability",
      "Transparency",
    ],
    datasets: [
      {
        label: "American Express",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [3, 5, 6, 7, 3, 5, 6, 7],
      },
      {
        label: "Mastercard",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [4, 7, 3, 6, 10, 7, 4, 6],
      },
      {
        label: "Paypal",
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        data: [10, 7, 4, 6, 9, 7, 3, 10],
      },
      {
        label: "Visa",
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 1,
        data: [6, 9, 7, 3, 10, 7, 4, 6],
      },
    ],
  };

  const radarChartData = {
    labels: [
      "Relationship Building",
      "Time Management",
      "Objection Handling",
      "Negotiation",
      "Closing Techniques",
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
        pointBackgroundColor: "#000000",
      },
    ],
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
          color: "#FFFFFF",
        },
        grid: {
          display: true,
          lineWidth: 2,
          color: "#FFFFFF",
          circular: true,
        },
        ticks: {
          display: true,
          stepSize: 25,
          color: "#505BC5",
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 500,
            family: "Manrope",
          },
          color: "#3C3C3C",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="w-1/2 h-[280px]">
        <Bar options={options} data={data} />
      </div>
      <div className="w-1/2 h-[280px]">
        <RadarChart
          chartData={radarChartData}
          chartOptions={radarChartOptions}
        />
      </div>
    </div>
  );
};

export default Appointments;
