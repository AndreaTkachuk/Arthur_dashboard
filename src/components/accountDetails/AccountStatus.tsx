import { Check, CircleCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function AccountStatus() {

    return (
        <div className="Account">
        <p className="mb-4">Account Status</p>
        <Card className="bg-secondary hover:border-primary-foreground">
          <CardContent>
            <div className="flex items-top justify-between">
              <div className="flex flex-col items-center">
                <CircleCheck className="text-chart-2" />

                <span className="text-sm pt-2">Submitted</span>
              </div>
              <div className="flex-1 h-3 -ml-4 -mr-2 border-b-2 border-dashed border-chart-2"></div>
              <div className="flex flex-col items-center">
                <CircleCheck className="text-chart-2" />

                <span className="text-sm pt-2">Review</span>
              </div>

              <div className="flex-1  h-3 -ml-2 -mr-2 border-b-2 border-dashed border-chart-2"></div>
              <div className="flex flex-col items-center">
                <CircleCheck className="text-chart-2" />

                <span className="text-sm pt-2">Quote</span>
              </div>

              <div className="flex-1 h-3 -ml-2 -mr-1 border-b-2 border-dashed border-chart-2"></div>
              <div className="flex flex-col items-center">
                <CircleCheck className="text-chart-2" />

                <span className="text-sm pt-2">Bind</span>
              </div>

              <div className="flex-1 h-3 -ml-1 -mr-1 border-b-2 border-dashed border-chart-2"></div>
              <div className="flex flex-col items-center">
                <CircleCheck className="text-chart-2" />

                <span className="text-sm pt-2">Issue</span>
              </div>

              <div className="flex-1 h-3 -ml-1 -mr-2 border-b-2 border-dashed border-gray-500"></div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-3 flex items-center justify-center">
                  <Check className="text-gray-500 w-3 h-3" />
                </div>

                <span className="text-sm pt-2">Renew</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  