import DoughnutChart from "./charts/DoughnutChart";
import ProgressBar from "./ProgressBar";

const LeadAnalytics = () => {
   return (
      <section className="flex flex-col w-full p-5 gap-3">
         <h4>Lead Analytics</h4>
         <div className="flex">
            <div className="flex items-center justify-center" style={{ flex: '0 0 auto' }}>
               <DoughnutChart value={85} />
            </div>
            <div className="flex flex-col gap-3 w-full ml-5"> {/* Add margin to separate from chart */}
               <ProgressBar progress={42} label={"Engagement"} />
               <ProgressBar progress={64} label={"Company Fit"} />
               <ProgressBar progress={82} label={"Conversation Rate"} />
            </div>
         </div>
      </section>
   );
};

export default LeadAnalytics;
