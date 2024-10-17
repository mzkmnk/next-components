// ssr
import { ReactNode } from "react";
import Sidebar from "./_components/Sidebar/Sidebar";
import { TIconName } from "./_components/icon-view/icon-view";

export type TSidebarHref = '/internal/github'|'/internal/twitter'|'/internal/instagram'|'/internal/youtube';

export type TSidebarLabel = 'github'|'twitter'|'instagram'|'youtube';


const Layout = ({children}:{children:ReactNode}) => {

    const sidebarItems:{
        sidebarLabel:TSidebarLabel,
        iconName:TIconName,
        sidebarHref:TSidebarHref,
    }[] = [
        {
            sidebarLabel:'github',
            iconName:'githubIcon',
            sidebarHref:'/internal/github'
        },
        {
            sidebarLabel:'twitter',
            iconName:'twitter',
            sidebarHref:'/internal/twitter'
        },
        {
            sidebarLabel:'instagram',
            iconName:'meta',
            sidebarHref:'/internal/instagram'
        },
        {
            sidebarLabel:'youtube',
            iconName:'youtube',
            sidebarHref:'/internal/youtube'
        }
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