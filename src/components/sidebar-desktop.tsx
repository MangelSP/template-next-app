import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import SidebarButton from './sidebar-button';
import { SidebarItems } from "@/types";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";

interface SidebarDesktopProps {
    sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();
  
    return (
        <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
            <div className="h-full px-3 py-4">
                <h3 className="mx-3 text-lg font-semibold text-foreground">
                    Twitter
                </h3>
                <div className="mt-5">
                    <div className="flex flex-col gap-1 w-full">
                        {
                            props.sidebarItems.links.map((link, index) => (
                                <Link key={index} href={link.href}>
                                    <SidebarButton
                                    variant={
                                        pathname === link.href ? "secondary" : 
                                  "ghost"  }
                                    className="w-full" icon={link.icon} >
                                        {link.label}
                                    </SidebarButton>
                                </Link>

                            ))
                        }
                        {props.sidebarItems.extras}
                    </div>
                    <div className="absolute left-0 bottom-3 w-full px-3">
                        <Separator className="absolute -top-3 left-0 w-full" />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="w-full justify-start">
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-2 flex-row ">
                                            <Avatar className="h-5 w-5">
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/117923457?v=4" />
                                                <AvatarFallback>Miguel Angel</AvatarFallback>
                                            </Avatar>
                                            <span>Miguel Angel</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                                <div className="space-y-1">
                                    <Link href="/">
                                        <SidebarButton className="w-full" icon={Settings}>
                                            Account Settings
                                        </SidebarButton>
                                    </Link>
                                    <SidebarButton  icon={LogOut} className="w-full">
                                        Log Out
                                    </SidebarButton>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </aside>
    );
}