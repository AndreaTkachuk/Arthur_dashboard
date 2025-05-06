import { CircleEllipsis, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { mockAccounts } from "@/data/mockData";

export default function MyAccounts() {
    const [sortState, setSortState] = useState("default");
      const [sortedAccounts, setSortedAccounts] = useState(mockAccounts);
      const [filterValue, setFilterValue] = useState("");
    
      const handleSort = () => {
        let nextSortState;
        if (sortState === "default") nextSortState = "asc";
        else if (sortState === "asc") nextSortState = "desc";
        else nextSortState = "default";
    
        setSortState(nextSortState);
    
        if (nextSortState === "asc") {
          setSortedAccounts(
            [...sortedAccounts].sort((a, b) => a.name.localeCompare(b.name))
          );
        } else if (nextSortState === "desc") {
          setSortedAccounts(
            [...sortedAccounts].sort((a, b) => b.name.localeCompare(a.name))
          );
        } else {
          setSortedAccounts([
            ...mockAccounts.filter((account) =>
              account.name.toLowerCase().includes(filterValue.toLowerCase())
            ),
          ]);
        }
      };
    
      const handleFilter = () => {
        setSortedAccounts(
          mockAccounts.filter((account) =>
            account.name.toLowerCase().includes(filterValue.toLowerCase())
          )
        );
      };

  return (
    <Card className="bg-secondary hover:border-primary-foreground">
      <CardHeader>
        <div className="flex gap-5 items-center flex-col md:flex-row">
          <div className="flex items-center gap-6">
            <CardTitle>My accounts</CardTitle>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="w-full bg-accent text-accent-foreground pl-3 pr-10 py-1 rounded-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleFilter}
              variant="outline"
              size="sm"
              className="w-22 flex items-center gap-1 rounded-full text-primary border-primary"
            >
              <span>Filter</span>
            </Button>
            <Button
              onClick={handleSort}
              variant="outline"
              size="sm"
              className="w-22 flex items-center gap-1 rounded-full text-primary border-primary"
            >
              <span>Sort</span>
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-22 rounded-full text-primary border-primary cursor-pointer"
                >
                  Group
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
                  size="sm"
                  className="w-22 bg-primary hover:bg-primary/90 rounded-full text-foreground gap-0 cursor-pointer"
                >
                  <Plus size={14} className="mr-1" />
                  <span>New</span>
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
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase bg-[#252A3D]">
                <th className="text-left py-2 pr-1 pl-4">Account Name/Type</th>
                <th className="text-left py-2 pr-1">Line</th>
                <th className="text-left py-2 pr-1">Broker</th>
                <th className="text-left py-2 pr-1">Renewal Date</th>
                <th className="text-left py-2 pr-1">Premium</th>
                <th className="text-left py-2 pr-1">Rated Premium</th>
                <th className="text-left py-2 pr-1">Loss Ratio</th>
                <th className="text-left py-2 pr-1">Appetite</th>
                <th className="text-left py-2 pr-1">Status</th>
                <th className="text-left py-2 pr-1">Triage</th>
                <th className="text-left py-2 pr-1">Winnability</th>
                <th className="text-left py-2 pr-1"></th>
              </tr>
            </thead>
            <tbody>
              {sortedAccounts.map((account, index) => (
                <tr
                  key={account.id}
                  className={`${
                    (index + 1) % 2 === 0
                      ? "bg-[#252A3D] border-t border-b"
                      : ""
                  }`}
                >
                  <td className="py-3 pr-1">
                    <Link
                      to={`/accounts/${account.id}`}
                      className="hover:text-primary transition-all duration-200"
                    >
                      <div className="pl-4 font-medium leading-none">
                        {account.name}
                      </div>
                      <div className="pl-4 text-sm text-gray-400">
                        {account.type}
                      </div>
                    </Link>
                  </td>
                  <td className="py-3 pr-1 leading-none">{account.line}</td>
                  <td className="py-3 pr-1 leading-none">{account.broker}</td>
                  <td className="py-3 pr-1">{account.renewalDate}</td>
                  <td className="py-3 pr-1 text-primary">{account.premium}</td>
                  <td className="py-3 pr-1">{account.ratedPremium}</td>
                  <td className="py-3 pr-1">
                    <Badge
                      className={`rounded-sm text-xs px-2 text-foreground rounded-full ${
                        account.lossRatio < 35
                          ? "bg-chart-2"
                          : account.lossRatio < 60
                          ? "bg-chart-3"
                          : "bg-chart-5"
                      }`}
                    >
                      {account.lossRatio}%
                    </Badge>
                  </td>
                  <td className="py-3 pr-2 uppercase text-xs font-medium">
                    <Badge className="rounded-sm text-xs px-2 w-full bg-primary-foreground rounded-full text-foreground">
                      {account.appetite}
                    </Badge>
                  </td>
                  <td className="py-3 pr-1">
                    <div className="flex items-center gap-1 leading-none">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          account.status === "Active"
                            ? "bg-chart-2"
                            : account.status === "Under review"
                            ? "bg-chart-1"
                            : "bg-chart-5"
                        }`}
                      ></div>
                      <span>{account.status}</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge className="rounded-full bg-secondary border border-primary text-primary">
                      {account.triage}
                    </Badge>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-1 border border-primary w-max py-[2px] px-2 rounded-full">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < account.winnabilityScore
                              ? "bg-primary"
                              : "bg-gray-700"
                          }`}
                        ></div>
                      ))}
                      <span className="ml-1 text-xs text-primary">
                        {account.winnability}
                      </span>
                    </div>
                  </td>
                  <td className="py-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="cursor-pointer"
                        >
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
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
