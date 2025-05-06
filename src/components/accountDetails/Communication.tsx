import { Paperclip } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Communication() {
  return (
    <Card className="bg-secondary hover:border-primary-foreground">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-accent text-accent-foreground pl-3 pr-10 py-1 rounded-full"
              />
            </div>
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
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                NEW
              </Badge>
              <h3 className="">Policy Renewal - Auto Insurance 5/15/25</h3>
            </div>
            <div className="text-xs text-gray-400 mb-2">
              <span>Michael Roberts</span> // <span>Apr 5</span>
            </div>
            <p className="text-sm mb-3 text-gray-300">
              Hello Arthur, I'm reaching out regarding the upcoming auto policy
              renewal for Fleet Estate Group. It expires on 5/15/2024. Would you
              like to review coverage options? I've attached the current policy
              details and premium breakdown for your reference.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-chart-2 text-foreground rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                <Paperclip size={12} />
                <span>3 attachments</span>
              </Badge>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  className="w-25 rounded-full text-foreground bg-blue-500"
                >
                  Reply
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

          <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                RESPONDED
              </Badge>
              <h3 className="">
                Fwd: New Submission - BPM Real Estate - EFF 4/1/24
              </h3>
            </div>
            <div className="text-xs text-gray-400 mb-2">
              <span>Joshua Donovan</span> // <span>Mar 25</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Arthur, attached please find our submission for the above
              mentioned applicant. We have...
            </p>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  className="w-25 rounded-full text-foreground bg-blue-500"
                >
                  Reply
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

          <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                NEW
              </Badge>
              <h3 className="">New Quote Request - Workers Comp Insurance</h3>
            </div>
            <div className="text-xs text-gray-400 mb-2">
              <span>Sarah Chen</span> // <span>Apr 5</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Hi Arthur, Real Estate Group has expressed interest in adding
              workers compensation coverage to their insurance portfolio. I've
              completed the initial risk assessment based...
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="secondary"
                className="bg-chart-2 text-foreground rounded-full px-2 py-0.5 text-xs flex items-center gap-1"
              >
                <Paperclip size={12} />
                <span>3 attachments</span>
              </Badge>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  className="w-25 rounded-full text-foreground bg-blue-500"
                >
                  Reply
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

          <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                NEW
              </Badge>
              <h3 className="">New Business: BPM Real Estate Group, LLc</h3>
            </div>
            <div className="text-xs text-gray-400 mb-2">
              <span>Isabel Kreller</span> // <span>Feb 28</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Hello Arthur, I am pleased to present you a submission on this
              client #39;s upco...
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="secondary"
                className="bg-chart-2 text-foreground rounded-full px-2 py-0.5 text-xs flex items-center gap-1"
              >
                <Paperclip size={12} />
                <span>5 attachments</span>
              </Badge>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  className="w-25 rounded-full text-foreground bg-blue-500"
                >
                  Reply
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
      </CardContent>
    </Card>
  );
}
