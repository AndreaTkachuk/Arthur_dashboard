import { useLocation, Link } from "react-router-dom";
import {
  Home,
  Database,
  Users,
  FileSymlink,
  KeyRound,
  Goal,
  Building2,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useRef } from "react";
import { mockWorkQueue } from "@/data/mockData"

const navItems = [
    { id: 1, name: "Dashboard", path: "/", icon: Home },
    { id: 2, name: "Accounts", path: "/accounts/1", icon: Database },
    { id: 3, name: "Brokers", path: "/brokers", icon: Users },
    { id: 4, name: "Submissions", path: "/submissions", icon: FileSymlink },
    { id: 5, name: "Organizations", path: "/organizations", icon: Building2 },
    { id: 6, name: "Goals & Rules", path: "/goals", icon: Goal },
    { id: 7, name: "Admin", path: "/admin", icon: KeyRound },
    { id: 8, name: "Admin", path: "/admin", icon: KeyRound },
    { id: 9, name: "Admin", path: "/admin", icon: KeyRound },
    { id: 10, name: "Admin", path: "/admin", icon: KeyRound },
    { id: 11, name: "Admin", path: "/admin", icon: KeyRound },
    { id: 12, name: "Admin", path: "/admin", icon: KeyRound },
  ];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 150;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="pt-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-border pb-[22px]">
          <h1 className="text-xl font-semibold">
            Hi Arthur, welcome! You have {mockWorkQueue.length} open tasks.
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="Search"
                className="bg-accent rounded-full border-none h-[48px]"
              />
            </div>
            <Avatar className="flex items-center justify-center text-whiteSec h-[48px] w-[48px] cursor-pointer">
              <AvatarFallback className="bg-primary-foreground">AR</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="relative">
            <nav ref={containerRef} className="flex gap-1 mt-[15px] mb-[19px] mr-[120px] overflow-hidden">
                  {navItems.map((item) => {
                    const isActive =
                      (item.path === "/" && currentPath === "/") ||
                      (item.path !== "/" && currentPath.startsWith(item.path));
                    return (
                        <Link
                          key={item.id}
                          to={item.path}
                          className={`flex items-center gap-2 rounded-full px-4 py-[12px] hover:border-primary-foreground ${
                            isActive
                              ? "bg-primary"
                              : "bg-black border border-border text-foreground"
                          }`}
                        >
                          <item.icon size={18} className={`${isActive ? "text-text": "text-primary"}`}/>
                          <span className="w-max text-base font-normal">{item.name}</span>
                        </Link>
                    );
                  })}
            </nav>
            <Button 
                variant="outline" 
                size="icon" 
                className="absolute w-[48px] h-[48px] right-14 top-0 rounded-full hover:border-primary-foreground cursor-pointer"
                onClick={() => scroll('left')}
            >
                <ArrowLeft />
            </Button>
            <Button 
                variant="outline" 
                size="icon" 
                className="absolute w-[48px] h-[48px] right-0 top-0 rounded-full hover:border-primary-foreground cursor-pointer"
                onClick={() => scroll('right')}
            >
                <ArrowRight />
            </Button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
