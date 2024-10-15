"use client"

import Circle from '@/public/assets/icons/Circle.svg';
import Docker from '@/public/assets/icons/Docker.svg';
import Group from '@/public/assets/icons/Group.svg';
import Users from '@/public/assets/icons/Users.svg';
import Webhook from '@/public/assets/icons/Webhook.svg';
import GitHubIcon from '@/public/assets/icons/Github-icon.svg';
import Buildings from '@/public/assets/icons/Buildings.svg';
import DotsVertical from '@/public/assets/icons/Dots-vertical.svg';
import LeftCollapse from '@/public/assets/icons/Left-collapse.svg';
import RightCollapse from '@/public/assets/icons/Right-collapse.svg'
import Search from '@/public/assets/icons/Search.svg';
import Notification from '@/public/assets/icons/Notification.svg'
import Sidebar from '@/public/assets/icons/Sidebar.svg';
import Timeline from '@/public/assets/icons/Timeline.svg';
import Check from '@/public/assets/icons/Check.svg';
import Cpu from '@/public/assets/icons/Cpu.svg'


export type TIconName = 'circle'
                        |'docker'
                        |'group'
                        |'users'
                        |'webhook'
                        |'buildings'
                        |'githubIcon'
                        |'dotsVertical'
                        |'leftCollapse'
                        |'rightCollapse'
                        |'search'
                        |'notification'
                        |'sidebar'
                        |'timeline'
                        |'check'
                        |'cpu';

const IconView = (
    {
        iconName,
        isSelected,
        onClick = () => {},
        style,
        ...props
    }:{
        iconName:TIconName,
        isSelected?:boolean,
        onClick?: () => void,
        style?:string,
        width?:number,
        height?:number,
        strokeWidth?:number,
    }) => {

    return (
        <div className={`${isSelected ? 'text-blue-600':'text-slate-600'} ${style}`} onClick={onClick}>
            {iconName === 'circle' ?
                <Circle {...props}></Circle> : iconName === 'docker' ?
                <Docker {...props}></Docker> : iconName === 'group' ?
                <Group {...props}></Group> : iconName === 'users' ?
                <Users {...props}></Users> : iconName === 'webhook' ?
                <Webhook {...props}></Webhook> : iconName === 'githubIcon' ?
                <GitHubIcon   {...props}></GitHubIcon> : iconName === 'buildings' ?
                <Buildings  {...props}></Buildings> : iconName === 'dotsVertical' ? 
                <DotsVertical  {...props}></DotsVertical> : iconName === 'leftCollapse' ?
                <LeftCollapse  {...props}></LeftCollapse> : iconName === 'rightCollapse' ? 
                <RightCollapse  {...props}></RightCollapse> : iconName === 'search' ? 
                <Search  {...props}></Search> : iconName === 'notification' ? 
                <Notification  {...props}></Notification> : iconName === 'sidebar' ? 
                <Sidebar  {...props}></Sidebar> : iconName === 'timeline' ?
                <Timeline  {...props}></Timeline> : iconName === 'check' ? 
                <Check  {...props}></Check> : iconName === 'cpu' ? 
                <Cpu {...props}></Cpu> : null
            }
        </div>
    )
};

export default IconView;