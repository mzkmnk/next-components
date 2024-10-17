// ssr
import { ReactNode } from "react";
import CompositionSidebar, { TSidebarHref, TSidebarLabel } from "../_components/composition-sidebar/CompositionSidebar";
import { TIconName } from "../_components/icon-view/icon-view";

const Layout = ({children}:{children:ReactNode}) => {

    const sidebarItems:{
        sidebarLabel:TSidebarLabel,
        iconName:TIconName,
        sidebarHref:TSidebarHref,
    }[] = [
        {
            sidebarLabel:'github',
            iconName:'githubIcon',
            sidebarHref:'/internal/compositionSidebar/github'
        },
        {
            sidebarLabel:'twitter',
            iconName:'twitter',
            sidebarHref:'/internal/compositionSidebar/twitter'
        },
        {
            sidebarLabel:'instagram',
            iconName:'meta',
            sidebarHref:'/internal/compositionSidebar/instagram'
        },
        {
            sidebarLabel:'youtube',
            iconName:'youtube',
            sidebarHref:'/internal/compositionSidebar/youtube'
        }
    ];

    return(
        <body>
            <div className="w-screen h-screen flex flex-row">
                <CompositionSidebar sidebarItems={sidebarItems}></CompositionSidebar>
                {children}
            </div>
        </body>
    )
};

export default Layout;