import Sidebar, { TProfile, TSidebarItem } from "./_components/sidebar/sidebar";
import ChipPreview from "./preview/chip-preview";
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
        {
            iconName:'cpu',
            itemLabel:'Chip',
            component:ChipPreview,
        }
    ];

    const profile:TProfile = {
        username:'MZKMNK',
        email:'mzkmnk@example.com',
        imagePath:'/assets/images/service-circle-icon.png',
    }

    return (
        <div className="h-screen w-screen">
            <Sidebar items={sidebarItems} profile={profile}></Sidebar>
        </div>
    );
}
