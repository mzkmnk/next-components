// csr

"use client"

import ContainerSidebarItem from "../_components/composition-sidebar/ContainerSidebarItem";
import { useSidebarStore } from "../_components/composition-sidebar/CompositionSidebar";
import GitHub from "../_components/composition-sidebar/sumples/github";

const Page = () => {

    const { sidebarLabel } = useSidebarStore();

    return (
        <>
            <ContainerSidebarItem>
                {
                    sidebarLabel === 'github' ? <GitHub></GitHub> : <div>{sidebarLabel}</div>
                }
            </ContainerSidebarItem>
        </>
    )
};

export default Page;