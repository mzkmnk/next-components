// ssr
import { ReactNode } from "react";
import CompositionSidebar, { TSidebarLabel } from "../_components/composition-sidebar/CompositionSidebar";
import { TIconName } from "../_components/icon-view/icon-view";

const Layout = ({children}:{children:ReactNode}) => {

    const sidebarItems:{
        sidebarLabel:TSidebarLabel,
        iconName:TIconName
    }[] = [
        {
            sidebarLabel:'github',
            iconName:'githubIcon'
        },
        {
            sidebarLabel:'twitter',
            iconName:'twitter',
        },
        {
            sidebarLabel:'instagram',
            iconName:'meta'
        },
        {
            sidebarLabel:'youtube',
            iconName:'youtube',
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