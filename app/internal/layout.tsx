// ssr
import { ReactNode } from "react";
import Sidebar, { TSidebarItem } from "./_components/Sidebar/Sidebar";

export type TSidebarHref = '/internal/github'|'/internal/twitter'|'/internal/instagram'|'/internal/youtube';

export type TSidebarLabel = 'github'|'twitter'|'instagram'|'youtube';


const Layout = ({children}:{children:ReactNode}) => {

    const sidebarItems:TSidebarItem[] = [
        {
            sidebarLabel:'Chip',
            iconName:'cpu',
            sidebarHref:'/internal/chip'
        },
        {
            sidebarLabel:'Sandbox',
            sidebarHref:'/internal/sandbox',
        }
    ];

    return(
        <div className="w-screen h-screen flex flex-row ">
            <Sidebar sidebarItems={sidebarItems}></Sidebar>
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    )
};

export default Layout;