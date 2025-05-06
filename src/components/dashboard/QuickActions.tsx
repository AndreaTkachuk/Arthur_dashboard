import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function QuickActions() {
  return (
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
                <p className="text-sm text-muted-foreground">Coming soon...</p>
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
                <p className="text-sm text-muted-foreground">Coming soon...</p>
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
                <p className="text-sm text-muted-foreground">Coming soon...</p>
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
                <p className="text-sm text-muted-foreground">Coming soon...</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  );
}
