import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { CircleCheck } from "lucide-react";

export default function Compliance() {
  return (
    <div className="Compliance">
      <p className="flex items-center justify-between mb-4">
        <span className="">Compliance & Documentation</span>
        <Link to="#" className="text-xs text-primary hover:underline">
          See history →
        </Link>
      </p>
      <Card className="bg-secondary py-[22px] hover:border-primary-foreground">
        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <CircleCheck className="text-chart-2 w-5" />
              <span>KYC verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="text-chart-2 w-5" />
              <span>Required Documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="text-chart-2 w-5" />
              <span>Regulatory approval</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="text-chart-2 w-5" />
              <span>Financial Verification</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
