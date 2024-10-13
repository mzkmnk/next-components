"use client"

import Sidebar, { TProfile, TSidebarItem } from "./_components/sidebar/sidebar";
import SidebarPreview from "./preview/sidebar";

export default function Internal(){

    const sidebarItems : TSidebarItem[] = [
        {
            iconName:'sidebar',
            itemLabel:'Sidebar',
            isSelected:true,
            component:SidebarPreview,
        },
    ];

    const profile:TProfile = {
        username:'MZKMNK',
        email:'mzkmnk@example.com',
        imagePath:'/service-icon.png',
    }

    return (
        <div className="h-screen w-screen">
            <Sidebar items={sidebarItems} profile={profile}></Sidebar>
        </div>
    );
}