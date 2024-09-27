import {
  CategoryScale,
  Chart as ChartJs,
  BarElement,
  LinearScale
} from "chart.js";
import { Bar } from "react-chartjs-2";
import RadarChart from "../components/RadarChart";
import Profile from "../components/Profile";
import Button from "../components/Button";
import ProfileWin from "../components/ProfileWin";
import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const ProfilePage = () => {
  const [isAudioClicked, setIsAudioClicked] = useState(false);
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
    <div className="px-5">
      <div className="flex justify-between my-3">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <div className="flex flex-row gap-3">
          <Button
            onClick={() => {}}
            label="Select dates"
            variant="secondary"
            icon="/icons/download.svg"
          />
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <Profile
          name="David Fayem"
          email="david@rayna.ui"
          url="david@rayna.ui"
          phone="08168141116"
          date="Friday, Sept 25, 2025"
        />
        <div className="flex flex-col gap-[14px] w-[400px]">
          <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[100px]">
            <div className="text-sm text-[#667185]">Leads</div>
            <div className="text-xl font-semibold text-[#101928]">2458</div>
          </div>
          <div className="bg-white border w-full border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[100px]">
            <div className="text-sm text-[#667185]">Calls made</div>
            <div className="text-xl font-semibold text-[#101928]">60/100</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-row gap-4 mt-10">
            <ProfileWin
              percentage="25%"
              message="Your Win Rate"
              subtitle="My 5% below team average"
              success={false}
            />
            <ProfileWin
              percentage="45"
              message="Calls per Day "
              subtitle="10% above team average"
              success={true}
            />
          </div>
          <div className="h-[430px]  bg-white rounded-[6px] border border-[#E4E7EC] p-4 mt-10">
            <div className="text-[#475367] font-semibold">Performance</div>
            <div className="h-96 w-full">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="h-[569px] w-[400px] bg-white rounded-[6px] border border-[#E4E7EC] p-4 mt-10">
          <div className="font-semibold text-[#475367] text-[16px]">
            Skill Assesment
          </div>
          <div className="w-[350px] h-[250px]">
            <RadarChart
              chartData={radarChartData}
              chartOptions={radarChartOptions}
            />
          </div>
          <div className="text-[#475367] text-xs font-semibold mb-2">
            Suggested Focus Areas
          </div>
          <ul className="list-disc space-y-2 mx-8 text-xs font-normal text-[#4F4F4F]">
            {[
              {
                heading: "Time Control",
                content:
                  " Work on prioritising tasks and improving efficiency.",
                link: "View Training Module"
              },
              {
                heading: "Deal Closing",
                content:
                  " Practice advanced closing strategies to improve deal conversion.",
                link: "Schedule Coaching Session"
              }
            ].map((item) => (
              <li>
                <p>{item.heading}:</p>
                <p>{item.content}</p>
                <p className="text-[#505BC5] hover:underline">{item.link}</p>
              </li>
            ))}
          </ul>

          <div>
            <div className="text-xs text-[#101928] font-semibold mt-5 mb-2 mx-2">
              Achievements
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                "100 Calls This Week",
                "Highest Open Rate",
                "Top Performer"
              ].map((achievement) => (
                <div className="px-3 py-1 bg-[#EFF3F8] rounded-full text-[11px] text-[#393D4A] h-[27px] w-fit flex items-center">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-[#E4E7EC] bg-white p-6 flex gap-5">
        <div className="w-[70%]">
          <div className="text-[#475367] font-semibold pb-4 border-b border-[#F0F2F5]">
            Call Recordings & Feedback
          </div>
          {isAudioClicked && (
            <>
              <AudioPlayer />
              <ul className="mt-6 text-sm text-[#4F4F4F]">
                {[
                  { text: "Speaking Pace", value: "150 WPM" },
                  { text: "Filler words", value: "Reduce 'um' and 'uh'" },
                  {
                    text: "Emotional tone",
                    value: "Customer sounded frustrated with pricing"
                  },
                  {
                    text: "Objection Handling",
                    value: "Emphasised value but missed cross-sell opportunity"
                  }
                ]?.map((item) => (
                  <div className="mb-2">
                    <span className="font-semibold mr-1.5">{item.text}:</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
        <div
          className="bg-[#F8FBFE] w-[30%] h-96 flex items-center justify-center"
          role="presentation"
          onClick={() => setIsAudioClicked(true)}
        >
          <img src="/images/recording.svg" alt="record" className="" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
