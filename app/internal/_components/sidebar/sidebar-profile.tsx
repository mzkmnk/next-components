import Image from "next/image";
import IconView from "../icon-view/icon-view";
import { TProfile } from "./sidebar";

const SidebarProfile = ({isOpen,profile}:{isOpen:boolean,profile:TProfile}) => {
    return (
        <div className={`duration-100 ${isOpen ? '':'hidden'}`}>
            <div className="border-t-[1.5px] my-2"></div>
            <div className="w-full flex flex-row items-center justify-between gap-2">
                <div className="flex flex-row items-center gap-2 w-full">
                    <Image className="rounded-full object-cover aspect-square" src={profile.imagePath} width={35} height={35} alt="icon" />
                    <div className="w-full truncate text-slate-400">
                        <p className="text-slate-700 font-semibold">{profile.username}</p>
                        <small>{profile.email}</small>
                    </div>
                </div>
                <div>
                    <IconView iconName="dotsVertical" style="p-2 hover:bg-slate-200 rounded-full cursor-pointer duration-200 text-slate-500" width={15} height={15}></IconView>
                </div>
            </div>  
        </div>
    )
};

export default SidebarProfile;