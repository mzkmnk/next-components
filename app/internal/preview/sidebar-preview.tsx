"use client"

import Sidebar, { TProfile, TSidebarItem } from "../_components/sidebar/sidebar";
import General from "../_components/sidebar/sumples/general";
import GitHub from "../_components/sidebar/sumples/github";
import Groups from "../_components/sidebar/sumples/groups";
import Notification from "../_components/sidebar/sumples/notification";
import Users from "../_components/sidebar/sumples/users";
import Webhook from "../_components/sidebar/sumples/webhook";

const SidebarPreview = () => {

    const sidebarItems : TSidebarItem[] = [
        {
            iconName:'buildings',
            itemLabel:'General',
            isSelected:true,
            component:General,
        },
        {
            iconName:'githubIcon',
            itemLabel:'Github',
            isSelected:false,
            chipShow:true,
            component:GitHub,
        },
        {
            iconName:'group',
            itemLabel:'Groups',
            isSelected:false,
            component:Groups,
        },
        {
            iconName:'users',
            itemLabel:'Users',
            isSelected:false,
            component:Users,
        },
        {
            iconName:'webhook',
            itemLabel:'Webhook',
            component:Webhook,
            isSelected:false,
        },
        {
            iconName:'notification',
            itemLabel:'Notification',
            component:Notification,
            isSelected:false,
        },
        {
            iconName:'buildings',
            itemLabel:'General',
            isSelected:true,
            component:General,
        },
        {
            iconName:'githubIcon',
            itemLabel:'Github',
            isSelected:false,
            component:GitHub,
        },
        {
            iconName:'group',
            itemLabel:'Groups',
            isSelected:false,
            component:Groups,
        },
        {
            iconName:'users',
            itemLabel:'Users',
            isSelected:false,
            component:Users,
        },
        {
            iconName:'webhook',
            itemLabel:'Webhook',
            component:Webhook,
            isSelected:false,
        },
        {
            iconName:'notification',
            itemLabel:'Notification',
            component:Notification,
            isSelected:false,
        },
        {
            iconName:'buildings',
            itemLabel:'General',
            isSelected:true,
            component:General,
        },
        {
            iconName:'githubIcon',
            itemLabel:'Github',
            isSelected:false,
            component:GitHub,
        },
        {
            iconName:'group',
            itemLabel:'Groups',
            isSelected:false,
            component:Groups,
        },
        {
            iconName:'users',
            itemLabel:'Users',
            isSelected:false,
            component:Users,
        },
        {
            iconName:'webhook',
            itemLabel:'Webhook',
            component:Webhook,
            isSelected:false,
        },
        {
            iconName:'notification',
            itemLabel:'Notification',
            component:Notification,
            isSelected:false,
        }
    ];

    const profile:TProfile = {
        username:'MZKMNK',
        email:'mzkmnk@example.com',
        imagePath:'/assets/images/icon.jpg'
    };

    return (
        <div className="h-full w-full flex items-center flex-col justify-center gap-4">
            <h2 className="text-slate-700 w-full text-left px-5">Sidebar Component</h2>
            <div className="w-4/5 h-4/5 border rounded-lg">
                <Sidebar items={sidebarItems} profile={profile}></Sidebar>
            </div>
        </div>
    )
};

export default SidebarPreview;
