// ssr
import { ReactNode } from "react";
import Sidebar from "./_components/Sidebar/Sidebar";
import { TIconName } from "./_components/icon-view/icon-view";

export type TSidebarHref = '/internal/github'|'/internal/twitter'|'/internal/instagram'|'/internal/youtube';

export type TSidebarLabel = 'github'|'twitter'|'instagram'|'youtube';


const Layout = ({children}:{children:ReactNode}) => {

    const sidebarItems:{
        sidebarLabel:string,
        iconName:TIconName,
        sidebarHref:string,
    }[] = [
        {
            sidebarLabel:'Chip',
            iconName:'cpu',
            sidebarHref:'/internal/github'
        },
    ];

    return(
        <body>
            <div className="w-screen h-screen flex flex-row">
                <Sidebar sidebarItems={sidebarItems}></Sidebar>
                {children}
            </div>
        </body>
    )
};

export default Layout;