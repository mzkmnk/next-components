"use client"

import Sidebar, { TSidebarItem } from "../_components/sidebar/sidebar";
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
            chip:{severity:'purple',chipLabel:'Beta'},
            component:Webhook,
            isSelected:false,
        },
        {
            iconName:'notification',
            itemLabel:'Notification',
            component:Notification,
            isSelected:false,
        },
        //　 削除
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
            chip:{severity:'purple',chipLabel:'Beta'},
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
            chip:{severity:'purple',chipLabel:'Beta'},
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

    return (
        <div className="w-4/5 h-4/5 border rounded-lg">
            <Sidebar items={sidebarItems}></Sidebar>
        </div>
    )
};

export default SidebarPreview;