import Circle from '../../../assets/icons/Circle.svg';
import Docker from '../../../assets/icons/Docker.svg';
import Folders from '../../../assets/icons/Folders.svg';
import Users from '../../../assets/icons/Users.svg';
import Webhook from '../../../assets/icons/Webhook.svg';
import GitHubIcon from '../../../assets/icons/github-icon.svg';
import Buildings from '../../../assets/icons/buildings.svg';

export type TIconName = 'circle'|'docker'|'folders'|'users'|'webhook'|'buildings'|'githubIcon';

const IconView = ({iconName}:{iconName:TIconName}) => {
    if(iconName === 'circle'){
        return <Circle className='text-slate-400'></Circle>
    }else if(iconName === 'docker'){
        return <Docker className='text-slate-400'></Docker>
    }else if(iconName === 'folders'){
        return <Folders className='text-slate-400'></Folders>
    }else if(iconName === 'users'){
        return <Users className='text-slate-400'></Users>
    }else if(iconName === 'webhook'){
        return <Webhook className='text-slate-400'></Webhook>
    }else if(iconName === 'githubIcon'){
        return <GitHubIcon className='text-slate-400'></GitHubIcon>
    }else if(iconName === 'buildings'){
        return <Buildings className='text-slate-400'></Buildings>
    }else{
        return <div></div>
    }
};

export default IconView;