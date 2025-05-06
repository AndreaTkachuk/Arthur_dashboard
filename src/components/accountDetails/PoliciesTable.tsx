import { mockPolicies } from "@/data/mockData";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CircleEllipsis, ShieldCheck, ShieldUser, Ship, Umbrella } from "lucide-react";
import { Badge } from "../ui/badge";

export default function PoliciesTable() {
  return (
    <Card className="bg-secondary hover:border-primary-foreground">
      <CardHeader>
        <div className="">
          <div className="flex items-center flex-wrap gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-accent text-accent-foreground pl-3 pr-10 py-1 rounded-full"
              />
            </div>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-25 bg-secondary border-primary text-primary hover:text-foreground rounded-full"
                  >
                    <span>Filter</span>
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-25 bg-secondary border-primary text-primary hover:text-foreground rounded-full"
                  >
                    <span>Group</span>
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
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase bg-[#252A3D]">
                <th className="text-left py-2 pl-3">Line</th>
                <th className="text-left py-2">Eff. Date</th>
                <th className="text-left py-2">Exp. Date</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Expiring Tech</th>
                <th className="text-left py-2">Expiring Premium</th>
                <th className="text-left py-2">Renewal to tech</th>
                <th className="text-left py-2">Renewal tech</th>
                <th className="text-left py-2">Renewal Premium</th>
                <th className="text-left py-2">Auto Change</th>
                <th className="text-left py-2">Loss Ratio</th>
                <th className="text-left py-2"></th>
              </tr>
            </thead>
            <tbody>
              {mockPolicies.map((policy) => (
                <tr
                  key={policy.id}
                  className={`${
                    policy.id % 2 === 0 ? "bg-[#252A3D] border-t border-b" : ""
                  }`}
                >
                  <td className="py-3 pl-3">
                    <div className="flex items-center gap-1">
                      {policy.line.includes("Marine") && (
                        <Ship className="rounded-full bg-blue-500 p-1" />
                      )}
                      {policy.line.includes("General") && (
                        <ShieldCheck className="rounded-full bg-chart-2 p-1" />
                      )}
                      {policy.line.includes("Workers") && (
                        <ShieldUser className="rounded-full bg-chart-4 p-1" />
                      )}
                      {policy.line.includes("Umbrella") && (
                        <Umbrella className="rounded-full bg-red-400 p-1" />
                      )}
                      <div className="">{policy.line}</div>
                    </div>
                    <div className="text-xs text-gray-400">{policy.number}</div>
                  </td>
                  <td className="py-3">{policy.effDate}</td>
                  <td className="py-3">{policy.expDate}</td>
                  <td className="py-6 flex items-center gap-0">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        policy.status === "Active" && "bg-chart-2"
                      } ${policy.status === "Pending" && "bg-chart-3"}`}
                    ></div>
                    <span className="rounded-sm text-xs px-2">
                      {policy.status}
                    </span>
                  </td>
                  <td className="py-3">
                    ${policy.expiringTech.toLocaleString()}
                  </td>
                  <td className="py-3">
                    ${policy.expiringPremium.toLocaleString()}
                  </td>
                  <td className="py-3">
                    ${policy.renewalToTech.toLocaleString()}
                  </td>
                  <td className="py-3">
                    ${policy.renewalTech.toLocaleString()}
                  </td>
                  <td className="py-3">
                    ${policy.renewalPremium.toLocaleString()}
                  </td>
                  <td
                    className={`py-3 ${
                      policy.rateChange > 5 && "text-chart-5"
                    }`}
                  >
                    {policy.rateChange}%
                  </td>
                  <td className="py-3">
                    <Badge
                      className={`rounded-full text-xs text-foreground px-2 ${
                        policy.lossRatio < 30
                          ? "bg-chart-2"
                          : policy.lossRatio < 60
                          ? "bg-chart-3 text-gray-700"
                          : "bg-chart-5"
                      }`}
                    >
                      {policy.lossRatio}%
                    </Badge>
                  </td>
                  <td className="py-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <CircleEllipsis size={16} className="rotate-90" />
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
                  </td>
                </tr>
              ))}
              <tr className="border-b border-border font-medium">
                <td className="py-3 pl-3">TOTAL ({mockPolicies.length})</td>
                <td className="py-3"></td>
                <td className="py-3"></td>
                <td className="py-3"></td>
                <td className="py-3">
                  $
                  {mockPolicies
                    .reduce((total, policy) => total + policy.expiringTech, 0)
                    .toLocaleString()}
                </td>
                <td className="py-3">
                  $
                  {mockPolicies
                    .reduce(
                      (total, policy) => total + policy.expiringPremium,
                      0
                    )
                    .toLocaleString()}
                </td>
                <td className="py-3">
                  $
                  {mockPolicies
                    .reduce((total, policy) => total + policy.renewalToTech, 0)
                    .toLocaleString()}
                </td>
                <td className="py-3">
                  $
                  {mockPolicies
                    .reduce((total, policy) => total + policy.renewalTech, 0)
                    .toLocaleString()}
                </td>
                <td className="py-3">
                  $
                  {mockPolicies
                    .reduce((total, policy) => total + policy.renewalPremium, 0)
                    .toLocaleString()}
                </td>
                <td className="py-3">6.9%</td>
                <td className="py-3">
                  <Badge className="rounded-full bg-chart-3 text-gray-700 text-xs px-2">
                    58.3%
                  </Badge>
                </td>
                <td className="py-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
