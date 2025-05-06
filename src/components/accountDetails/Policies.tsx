import {
  Building2,
  ShieldCheck,
  ShieldUser,
  Ship,
  Umbrella,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Policies() {
  return (
    <div className="bg-secondary p-4 rounded-xl border hover:border-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-[#252A3D] border-none py-0">
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center gap-1">
              <Ship size={20} className="text-primary" />
              <p className="">Marine Cargo</p>
            </div>
            <p className="text-xs text-gray-400">Premium: $625,000</p>
            <p className="text-xs text-gray-400">Effective: 6/30/2026</p>
          </CardContent>
        </Card>
        <Card className="bg-[#252A3D] border-none py-0">
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center gap-1">
              <ShieldCheck size={20} className="text-chart-2" />
              <p className="">General Liability</p>
            </div>
            <p className="text-xs text-gray-400">Premium: $715,000</p>
            <p className="text-xs text-gray-400">Eff.Date: 6/30/2026</p>
          </CardContent>
        </Card>
        <Card className="bg-[#252A3D] border-none py-0">
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center gap-1">
              <ShieldUser size={20} className="text-chart-4" />
              <p className="">Workers Comp</p>
            </div>
            <p className="text-xs text-gray-400">Premium: $75,000</p>
            <p className="text-xs text-gray-400">Eff.Date: ---</p>
          </CardContent>
        </Card>
        <Card className="bg-[#252A3D] border-none py-0">
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center gap-1">
              <Building2 size={20} className="text-chart-3" />
              <p className="">Property</p>
            </div>
            <p className="text-xs text-gray-400">Premium: $64,829.83</p>
            <p className="text-xs text-gray-400">Eff.Date: ---</p>
          </CardContent>
        </Card>
        <Card className="bg-[#252A3D] border-none py-0">
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center gap-1">
              <Umbrella size={20} className="text-chart-5" />
              <p className="">Umbrella</p>
            </div>
            <p className="text-xs text-gray-400">Premium: $275,000</p>
            <p className="text-xs text-gray-400">Eff.Date: 13/03/2026</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
