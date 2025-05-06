import PortfolioGoals from "@/components/dashboard/PortfolioGoals";
import WorkQueue from "@/components/dashboard/WorkQueue";
import QuickActions from "@/components/dashboard/QuickActions";
import MarketIntelligence from "@/components/dashboard/MarketIntelligence";
import MyAccounts from "@/components/dashboard/MyAccounts";

const Dashboard = () => {
  return (
    <div className="container mx-auto space-y-6">
      <div className="grid grid-cols-2 xl:grid-rows-2 xl:grid-cols-14 gap-4">
        <WorkQueue />

        <PortfolioGoals />

        <QuickActions />

        <MarketIntelligence />
      </div>

      <MyAccounts />
    </div>
  );
};

export default Dashboard;
