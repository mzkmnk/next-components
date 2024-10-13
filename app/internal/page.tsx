"use client"

import Sidebar, { TSidebarItem } from "./_components/sidebar/sidebar";
import SidebarPreview from "./preview/sidebar";

export default function Internal(){

    const sidebarItems : TSidebarItem[] = [
        {
            iconName:'buildings',
            itemLabel:'General',
            isSelected:true,
            component:SidebarPreview,
        },
    ];

    return (
        <div className="h-screen w-screen">
            <Sidebar items={sidebarItems}></Sidebar>
        </div>
    );
}