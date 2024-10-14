import Sidebar, { TProfile, TSidebarItem } from "./_components/sidebar/sidebar";
import SidebarPreview from "./preview/sidebar-preview";
import TimelinePreview from "./preview/timeline-preview";

export default function Internal(){

    const sidebarItems : Omit<TSidebarItem,'isSelected'>[] = [
        {
            iconName:'sidebar',
            itemLabel:'Sidebar',
            component:SidebarPreview,
        },
        {
            iconName:'timeline',
            itemLabel:'Timeline',
            component:TimelinePreview
        },
    ];

    const profile:TProfile = {
        username:'MZKMNK',
        email:'mzkmnk@example.com',
        imagePath:'/assets/images/service-icon.png',
    }

    return (
        <div className="h-screen w-screen">
            <Sidebar items={sidebarItems} profile={profile}></Sidebar>
        </div>
    );
}