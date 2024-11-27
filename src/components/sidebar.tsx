'use client'

import { Bell, Home, MoreHorizontal, PersonStanding } from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarItems } from "@/types";
import SidebarButton from './sidebar-button';

const sidebarItems: SidebarItems = {
    links: [
        { label: 'Home', href: "/", icon: Home },
        { label: 'Notifications', href: '/item/notifications', icon: Bell },

        { label: 'Contact', href: "/item/contact", icon: PersonStanding }

    ],
    extras: (
        <div className="flex flex-col gap-2">
            <SidebarButton icon={MoreHorizontal} className="w-full">More

            </SidebarButton>
            <SidebarButton className="w-full justify-center text-white" variant='default'>Tweet

</SidebarButton>
        </div>
    )

}

export function SideBar() {
    return (
        <SidebarDesktop sidebarItems={sidebarItems} />);
}