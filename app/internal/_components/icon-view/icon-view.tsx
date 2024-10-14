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
                        |'check';

const IconView = (
    {
        iconName,
        width = 20,
        height = 20,
        strokeWidth = 2,
        isSelected,
        onClick = () => {},
        style
    }:{
        iconName:TIconName,
        width?:number,
        height?:number,
        strokeWidth?:number,
        isSelected?:boolean,
        onClick?: () => void,
        style?:string
    }) => {

    return (
        <div className={`${isSelected ? 'text-blue-600':'text-slate-600'} ${style}`} onClick={onClick}>
            {iconName === 'circle' ?
                <Circle width={width} height={height} strokeWidth={strokeWidth}></Circle> : iconName === 'docker' ?
                <Docker width={width} height={height} strokeWidth={strokeWidth}></Docker> : iconName === 'group' ?
                <Group width={width} height={height} strokeWidth={strokeWidth}></Group> : iconName === 'users' ?
                <Users width={width} height={height} strokeWidth={strokeWidth}></Users> : iconName === 'webhook' ?
                <Webhook width={width} height={height} strokeWidth={strokeWidth}></Webhook> : iconName === 'githubIcon' ?
                <GitHubIcon  width={width} height={height} strokeWidth={strokeWidth}></GitHubIcon> : iconName === 'buildings' ?
                <Buildings width={width} height={height} strokeWidth={strokeWidth}></Buildings> : iconName === 'dotsVertical' ? 
                <DotsVertical width={width} height={height} strokeWidth={strokeWidth}></DotsVertical> : iconName === 'leftCollapse' ?
                <LeftCollapse width={width} height={height} strokeWidth={strokeWidth}></LeftCollapse> : iconName === 'rightCollapse' ? 
                <RightCollapse width={width} height={height} strokeWidth={strokeWidth}></RightCollapse> : iconName === 'search' ? 
                <Search width={width} height={height} strokeWidth={strokeWidth}></Search> : iconName === 'notification' ? 
                <Notification width={width} height={height} strokeWidth={strokeWidth}></Notification> : iconName === 'sidebar' ? 
                <Sidebar width={width} height={height} strokeWidth={strokeWidth}></Sidebar> : iconName === 'timeline' ?
                <Timeline width={width} height={height} strokeWidth={strokeWidth}></Timeline> : iconName === 'check' ? 
                <Check width={width} height={height} strokeWidth={strokeWidth}></Check> : null
            }
        </div>
    )
};

export default IconView;