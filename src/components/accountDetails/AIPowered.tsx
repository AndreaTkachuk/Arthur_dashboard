import { Rocket } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

export default function AIPowered() {
  return (
    <div className="mt-6 bg-[#252A3D] rounded-xl p-4 pr-6">
      <div className="flex items-center gap-2 mb-4">
        <Rocket className="text-chart-2" />
        <span className="text-chart-2">AI-Powered Recommendations</span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div>
            <p className="">
              Offer 5% premium discount in exchange for 3-year commitment
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Historical analysis indicates 25% churn in multi-year contracts.
              Current pricing is 12% above market average. This approach would
              strengthen retention while maintaining adequate profitability.
            </p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-25 bg-chart-2 hover:bg-chart-2 hover:text-foreground rounded-full">
                Apply
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Note</h4>
                  <p className="text-sm text-muted-foreground">
                    Coming soon...
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div>
            <p className="">
              Propose risk control services for cargo handling procedures
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Can potentially reduce loss ratio by 15-20% based on similar
              maritime accounts in your portfolio. Special focus on
              loading/unloading operations would address the most frequent claim
              scenarios.
            </p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-25 bg-chart-2 hover:bg-chart-2 hover:text-foreground rounded-full">
                Apply
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Note</h4>
                  <p className="text-sm text-muted-foreground">
                    Coming soon...
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
