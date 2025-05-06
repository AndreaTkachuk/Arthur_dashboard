import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function MarketIntelligence() {

    return (
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
    );
  }
  