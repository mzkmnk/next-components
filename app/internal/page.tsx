import Sidebar, { TProfile, TSidebarItem } from "./_components/sidebar/sidebar";
import SidebarPreview from "./preview/sidebar-preview";
import TimelinePreview from "./preview/timeline-preview";

export default function Internal(){

    const sidebarItems : TSidebarItem[] = [
        {
            iconName:'sidebar',
            itemLabel:'Sidebar',
            isSelected:true,
            component:SidebarPreview,
        },
        {
            iconName:'timeline',
            itemLabel:'Timeline',
            isSelected:false,
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