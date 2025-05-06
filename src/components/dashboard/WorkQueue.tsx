import { mockWorkQueue } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CircleEllipsis } from "lucide-react";

export default function WorkQueue() {
  const pendingQueue = mockWorkQueue.filter(
    (item) => item.status === "Pending Review"
  );
  const referralsQueue = mockWorkQueue.filter((item) => item.status === "New");
  
  return (
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
                            <div className="leading-none">{item.client}</div>
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
                            <div className="leading-none">{item.client}</div>
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
                            <div className="leading-none">{item.client}</div>
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
  );
}
