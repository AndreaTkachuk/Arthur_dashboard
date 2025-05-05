import { Link } from "react-router-dom";
import { Plus, CircleEllipsis } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockWorkQueue, mockAccounts } from "@/data/mockData";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PortfolioGoals from "@/components/PortfolioGoals";

const Dashboard = () => {
  const pendingQueue = mockWorkQueue.filter(
    (item) => item.status === "Pending Review"
  );
  const referralsQueue = mockWorkQueue.filter((item) => item.status === "New");

  return (
    <div className="container mx-auto space-y-6">
      <div className="grid grid-cols-2 xl:grid-rows-2 xl:grid-cols-14 gap-4">
        {/* Work Queue Section */}
        <div className="col-span-2 xl:col-span-8 xl:row-span-2">
          <Card className="bg-secondary gap-[10px] hover:border-primary-foreground">
            <CardHeader>
              <CardTitle>Work Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="assigned">
                <TabsList className="mb-4 gap-2 bg-secondary">
                  <TabsTrigger
                    value="assigned"
                    className="rounded-full bg-black data-[state=active]:bg-primary cursor-pointer"
                  >
                    {`Assigned to me (${mockWorkQueue.length})`}
                  </TabsTrigger>
                  <TabsTrigger
                    value="pending"
                    className="rounded-full bg-black data-[state=active]:bg-primary cursor-pointer"
                  >
                    Pending Review ({pendingQueue.length})
                  </TabsTrigger>
                  <TabsTrigger
                    value="referrals"
                    className="rounded-full bg-black data-[state=active]:bg-primary cursor-pointer"
                  >
                    Referrals ({referralsQueue.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="assigned" className="m-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs text-gray-400 uppercase bg-[#252A3D]">
                          <th className="text-left py-2 pl-2">Originator</th>
                          <th className="text-left py-2">Client/Line</th>
                          <th className="text-left py-2">Type</th>
                          <th className="text-left py-2">Status</th>
                          <th className="text-left py-2">Created</th>
                          <th className="text-left py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockWorkQueue.map((item) => (
                          <tr
                            key={item.id}
                            className={`${
                              item.id % 2 === 0
                                ? "bg-[#252A3D] border-t border-b"
                                : ""
                            }`}
                          >
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center text-xs">
                                  {item.originatorInitials}
                                </div>
                                <span className="leading-none">
                                  {item.originator}
                                </span>
                              </div>
                            </td>
                            <td className="py-3">
                              <div>
                                <div className="leading-none">
                                  {item.client}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {item.line}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 leading-none">{item.type}</td>
                            <td className="py-3 text-sm">
                              <div className="flex items-center gap-1 h-full">
                                <span
                                  className={`block w-2 h-2 rounded-full
                                  ${item.status === "New" && "bg-chart-1"}
                                  ${
                                    item.status === "Pending Review" &&
                                    "bg-chart-3"
                                  }
                                  ${item.status === "Completed" && "bg-chart-2"}
                                `}
                                ></span>
                                <span>{item.status}</span>
                              </div>
                            </td>
                            <td className="py-3">{item.created}</td>
                            <td className="py-3">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <CircleEllipsis
                                      size={16}
                                      className="rotate-90"
                                    />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-40">
                                  <div className="grid gap-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium leading-none">
                                        Note
                                      </h4>
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
                </TabsContent>

                <TabsContent value="pending" className="m-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs text-gray-400 uppercase bg-[#252A3D]">
                          <th className="text-left py-2 pl-2">Originator</th>
                          <th className="text-left py-2">Client/Line</th>
                          <th className="text-left py-2">Type</th>
                          <th className="text-left py-2">Status</th>
                          <th className="text-left py-2">Created</th>
                          <th className="text-left py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingQueue.map((item) => (
                          <tr
                            key={item.id}
                            className={`${
                              item.id % 2 === 0
                                ? "bg-[#252A3D] border-t border-b"
                                : ""
                            }`}
                          >
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center text-xs">
                                  {item.originatorInitials}
                                </div>
                                <span className="leading-none">
                                  {item.originator}
                                </span>
                              </div>
                            </td>
                            <td className="py-3">
                              <div>
                                <div className="leading-none">
                                  {item.client}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {item.line}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 leading-none">{item.type}</td>
                            <td className="py-3 text-sm">
                              <div className="flex items-center gap-1">
                                <span
                                  className={`block w-2 h-2 rounded-full
                                  ${item.status === "New" && "bg-chart-1"}
                                  ${
                                    item.status === "Pending Review" &&
                                    "bg-chart-3"
                                  }
                                  ${item.status === "Completed" && "bg-chart-2"}
                                `}
                                ></span>
                                <span>{item.status}</span>
                              </div>
                            </td>
                            <td className="py-3">{item.created}</td>
                            <td className="py-3">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <CircleEllipsis
                                      size={16}
                                      className="rotate-90"
                                    />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-40">
                                  <div className="grid gap-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium leading-none">
                                        Note
                                      </h4>
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
                </TabsContent>

                <TabsContent value="referrals" className="m-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs text-gray-400 uppercase bg-[#252A3D]">
                          <th className="text-left py-2 pl-2">Originator</th>
                          <th className="text-left py-2">Client/Line</th>
                          <th className="text-left py-2">Type</th>
                          <th className="text-left py-2">Status</th>
                          <th className="text-left py-2">Created</th>
                          <th className="text-left py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {referralsQueue.map((item) => (
                          <tr
                            key={item.id}
                            className={`${
                              item.id % 2 === 0
                                ? "bg-[#252A3D] border-t border-b"
                                : ""
                            }`}
                          >
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center text-xs">
                                  {item.originatorInitials}
                                </div>
                                <span className="leading-none">
                                  {item.originator}
                                </span>
                              </div>
                            </td>
                            <td className="py-3">
                              <div>
                                <div className="leading-none">
                                  {item.client}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {item.line}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 leading-none">{item.type}</td>
                            <td className="py-3 text-sm">
                              <div className="flex items-center gap-1">
                                <span
                                  className={`block w-2 h-2 rounded-full
                                  ${item.status === "New" && "bg-chart-1"}
                                  ${
                                    item.status === "Pending Review" &&
                                    "bg-chart-3"
                                  }
                                  ${item.status === "Completed" && "bg-chart-2"}
                                `}
                                ></span>
                                <span>{item.status}</span>
                              </div>
                            </td>
                            <td className="py-3">{item.created}</td>
                            <td className="py-3">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <CircleEllipsis
                                      size={16}
                                      className="rotate-90"
                                    />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-40">
                                  <div className="grid gap-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium leading-none">
                                        Note
                                      </h4>
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
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Goals */}

        <PortfolioGoals />

        {/* Quick Actions */}
        <Card className="bg-secondary xl:col-span-3 xl:col-rows-1 hover:border-primary-foreground">
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full bg-primary rounded-full text-[#B6B9C3] cursor-pointer hover:bg-primary/90">
                  New Submission
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
                <Button className="w-full bg-primary rounded-full text-[#B6B9C3] cursor-pointer hover:bg-primary/90">
                  Quote Builder
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
                <Button className="w-full bg-primary rounded-full text-[#B6B9C3] cursor-pointer hover:bg-primary/90">
                  Risks Models
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
                <Button className="w-full bg-primary rounded-full text-[#B6B9C3] cursor-pointer hover:bg-primary/90">
                  Documents Upload
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
          </CardContent>
        </Card>

        {/* Market Intelligence */}
        <Card className="bg-secondary xl:col-span-3 xl:col-rows-2 gap-4 hover:border-primary-foreground">
          <CardHeader>
            <CardTitle>Market intelligence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-3 text-[#9B9EAB] border-b pb-[5px]">
              <div className="w-4 h-4 rounded-full bg-chart-5 shrink-0"></div>
              <div>
                <p className="font-medium">
                  Rate hardening in Cyber market - +15% YoY
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-[#9B9EAB] border-b pb-[5px]">
              <div className="w-4 h-4 rounded-full bg-chart-3 shrink-0"></div>
              <div>
                <p className="font-medium">
                  New capacity entering Marine market
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-[#9B9EAB] border-b pb-[5px]">
              <div className="w-4 h-4 rounded-full bg-chart-1 shrink-0"></div>
              <div>
                <p className="font-medium">
                  Environmental regulatory changes in CA
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* </div> */}
      </div>

      {/* My Accounts Section */}
      <Card className="bg-secondary hover:border-primary-foreground">
        <CardHeader>
          <div className="flex gap-5 items-center flex-col md:flex-row">
            <div className="flex items-center gap-6">
              <CardTitle>My accounts</CardTitle>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-accent text-accent-foreground pl-3 pr-10 py-1 rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-22 flex items-center gap-1 rounded-full text-primary border-primary"
              >
                <span>Filter</span>
              </Button>
              <Button
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
                  <th className="text-left py-2 pr-1 pl-4">
                    Account Name/Type
                  </th>
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
                {mockAccounts.map((account) => (
                  <tr
                    key={account.id}
                    className={`${
                      account.id % 2 === 0
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
                    <td className="py-3 pr-1 text-primary">
                      {account.premium}
                    </td>
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
    </div>
  );
};

export default Dashboard;
