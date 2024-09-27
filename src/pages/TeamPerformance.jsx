import EngagementChart from "../components/charts/EngagementChart";
import MeetingVolumeAndTimeEfficiencyChart from "../components/charts/MeetingEfficiency";
import TeamCommunicationChart from "../components/charts/TeamCommunicationChart";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";
import { horizontalChartData } from "../constants/dummyData";

const TeamPerformance = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">
        Sales Team Performance Dashboard
      </h1>
      <div className="flex justify-between gap-3 pt-5">
        <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[130px]">
          <div className="text-sm text-[#667185]">Team Talktime Average</div>
          <div className="text-xl font-semibold text-[#101928]">30%</div>
        </div>
        <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[130px]">
          <div className="text-sm text-[#667185]">Team Engagement Score</div>
          <div className="text-xl font-semibold text-[#101928]">70%</div>
        </div>
        <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[130px]">
          <div className="text-sm text-[#667185]">Team Meetings Conducted</div>
          <div className="text-xl font-semibold text-[#101928]">50</div>
        </div>
        <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[130px]">
          <div className="text-sm text-[#667185]">Next Steps Rate</div>
          <div className="text-xl font-semibold text-[#101928]">4.5</div>
          <div className="text-sm text-[#98A2B3]">per meeting</div>
        </div>
        <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[130px]">
          <div className="text-sm text-[#667185]">Deal Probability</div>
          <div className="text-xl font-semibold text-[#101928]">80%</div>
          <div className="text-sm text-[#98A2B3]">likely to close</div>
        </div>
        <div className="bg-white w-full border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 py-5 px-8 h-[130px]">
          <div className="text-sm text-[#667185]">Pipeline Health</div>
          <div className="text-xl font-semibold text-[#101928]">80%</div>
          <div className="text-sm text-[#98A2B3]">
            of deals progressing well
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold pt-5">Team Leaderboard</p>
    {/* <div class="w-[500px] h-[500px]">
      <TeamCommunicationChart />
      <EngagementChart />
      <MeetingVolumeAndTimeEfficiencyChart />
      <HorizontalBarChart data={horizontalChartData} />
    </div> */}
    </div>
  );
};

export default TeamPerformance;
