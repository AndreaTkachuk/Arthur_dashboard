import { mockAccountDetails } from "@/data/mockData";
import { Info, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    const account = mockAccountDetails;

    return (
        <div className="flex 2xl:items-end flex-col xl:flex-row gap-6 justify-between">
        <div className="flex gap-4 items-start">
          <div className="bg-white rounded-full p-4 flex-shrink-0">
            <img src="/vite.svg" alt="Company Logo" className="h-16 w-16" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl mb-1">{account.name}</h1>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <p className="w-52">{account.address}</p>
              <div className="border-l pl-4">
                <p className="text-xs uppercase text-gray-400">
                  Existing Account
                </p>
                <p className="">{account.accountId}</p>
              </div>
              <div className="border-l pl-4">
                <p className="text-xs uppercase text-gray-400">BROKER</p>
                <p className="">{account.broker}</p>
              </div>
              <div className="border-l pl-4">
                <p className="text-xs uppercase text-gray-400">UNDERWRITER</p>
                <p className="">{account.underwriter}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary border border-chart-3 rounded-xl p-4 w-max">
          <div className="flex items-center">
            <Info size={14} className="mr-1 text-chart-3" />
            <div className="text-chart-3">Needs Attention</div>
          </div>

          <div className="flex gap-4 text-sm flex-col sm:flex-row">
            <div>
              <p className="text-sm">Marine Survey Required</p>
              <p className="text-[10px] text-gray-400">
                Scheduled for 06/15/2025
              </p>
              <Link
                to="#"
                className="flex items-center text-primary hover:text-foreground text-xs"
              >
                Review details link
                <MoveRight size={12} className="pt-1" />
              </Link>
            </div>
            <div>
              <p className="text-sm">Loss Control Complete</p>
              <p className="text-[10px] text-gray-400">
                Last inpection: 02/15/2025
              </p>
              <Link
                to="#"
                className="flex items-center text-primary hover:text-foreground text-xs"
              >
                View report
                <MoveRight size={12} className="pt-1" />
              </Link>
            </div>
            <div>
              <p className="text-sm">Claims Review Required</p>
              <p className="text-[10px] text-gray-400">
                3 open claims // $245.000 TTL
              </p>
              <Link
                to="#"
                className="flex items-center text-primary hover:text-foreground text-xs"
              >
                View claims
                <MoveRight size={12} className="pt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  