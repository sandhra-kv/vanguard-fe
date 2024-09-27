import EngagementChart from "../components/charts/EngagementChart";
import MeetingVolumeAndTimeEfficiencyChart from "../components/charts/MeetingEfficiency";
import TeamCommunicationChart from "../components/charts/TeamCommunicationChart";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";
import {
  competitorData,
  competitorHeader,
  horizontalChartData,
} from "../constants/dummyData";
import ExcitementLevelChart from "../components/charts/ExcitementLevelChart";
import PipelineVelocity from "../components/charts/PipelineVelocity";
import PieChart from "../components/charts/PieChart";
import List from "../components/List";
import {
  leaderBoardHeaders,
  leaderBoardData,
  accountabilityHeader,
  accountabilityData,
  deadlineHeader,
  deadlineData,
} from "../constants/dummyData";
import BarChart from "../components/charts/BarChart";

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
      <p className="text-xl font-semibold pt-5 pb-4">Team Leaderboard</p>
      <List headers={leaderBoardHeaders} data={leaderBoardData} />
      <p className="text-xl font-semibold pt-5">
        Aggregated Team Communication Insights
      </p>
      <div className="flex w-full gap-4 mt-5">
        <div className="w-1/2 h-[430px]">
          <p className="text-base font-semibold pb-4">Talktime Percentage</p>
          <TeamCommunicationChart />
        </div>
        <div className="w-1/2 h-[430px]">
          <p className="text-base font-semibold pb-4">
            Average Questions per Meeting
          </p>
          <HorizontalBarChart data={horizontalChartData} />
        </div>
      </div>
      <p className="text-xl font-semibold pt-5">
        Engagement & Emotional Intelligence
      </p>
      <div className="flex w-full gap-4 mt-5">
        <div className="w-1/2 h-[430px]">
          <p className="text-base font-semibold pb-4">Engagement Percentage</p>
          <EngagementChart />
        </div>
        <div className="w-1/2 h-[430px]">
          <p className="text-base font-semibold pb-4">
            Excitement Levels Over Time
          </p>
          <ExcitementLevelChart />
        </div>
      </div>
      <p className="text-xl font-semibold pt-5">
        Meeting Volume & Time Efficiency
      </p>
      <div className="flex w-full gap-4 mt-5">
        <div className="w-1/2 h-[430px]">
          <p className="text-base font-semibold pb-4">Meeting Times</p>
          <MeetingVolumeAndTimeEfficiencyChart />
        </div>
        <div className="w-1/2 h-[430px]">
          <p className="text-base font-semibold pb-4">Pipeline Velocity</p>
          <PipelineVelocity />
        </div>
      </div>
      <p className="text-xl font-semibold pt-5">
        Key Discussion Topics Tracker
      </p>
      <div className="flex w-full gap-4 mt-5">
        <div className="w-1/3 h-[430px]">
          <p className="text-base font-semibold pb-4">Most discussed Topics</p>
          <PieChart />
        </div>
        <div className="w-1/3 h-[430px]">
          <p className="text-base font-semibold pb-4">Topic frequency by Rep</p>
          <BarChart />
        </div>
        <div className="w-1/3 h-[430px]">
          <p className="text-base font-semibold pb-4">Competitor Mentions</p>
          <List headers={competitorHeader} data={competitorData} />
        </div>
      </div>
      <p className="text-xl font-semibold pt-5 pb-4">
        Next Steps & Accountability
      </p>
      <div className="flex gap-3">
        <div className="w-full">
          <p className="text-base font-semibold pb-4">Accountability Metrix</p>
          <List headers={accountabilityHeader} data={accountabilityData} />
        </div>
        <div className="w-full">
          <p className="text-base font-semibold pb-4">Upcoming Deadlines</p>
          <List headers={deadlineHeader} data={deadlineData} />
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;
