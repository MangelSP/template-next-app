'use client'

import { Grape, Home, PersonStanding } from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";

const sidebarItems = {
    links: [
        { label: 'Home', href: "/", icon: Home },
        { label: 'About', href: "/about", icon: Grape },
        { label: 'Contact', href: "/contact", icon: PersonStanding }

    ]

}

export function SideBar() {
    return (
        <SidebarDesktop sidebarItems={sidebarItems} />);
}