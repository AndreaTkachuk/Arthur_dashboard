import Breadcrumb from "@/components/accountDetails/Breadcrumb";
import Header from "@/components/accountDetails/Header";
import PerformanceMetrics from "@/components/accountDetails/PerformanceMetrics";
import Policies from "@/components/accountDetails/Policies";
import AccountStatus from "@/components/accountDetails/AccountStatus";
import Compliance from "@/components/accountDetails/Compliance";
import Details from "@/components/accountDetails/Details";
import Communication from "@/components/accountDetails/Communication";
import PoliciesTable from "@/components/accountDetails/PoliciesTable";

const AccountDetails = () => {

  return (
    <div className="container mx-auto space-y-6">
      <Breadcrumb />

      <Header />

      <PerformanceMetrics />

      <p className="mb-4">Policies</p>
      <Policies />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AccountStatus />

        <Compliance />
      </div>

      <p className="mb-4">Account Details</p>
      <Details />

      <p className="mb-4">Communication</p>
      <Communication />

      <p className="mb-4">Policies</p>
      <PoliciesTable />
    </div>
  );
};

export default AccountDetails;
