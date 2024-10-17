// csr
"use client"

import { useState } from "react";
import IconView, { TIconName } from "../icon-view/icon-view";
import SidearItem from "./SidebarItem";

export type TSidebar = {
    sidebarItems?:{
        sidebarLabel:string,
        iconName:TIconName,
        sidebarHref: string,
    }[]
}

const Sidebar = ({sidebarItems}:TSidebar) => {

    const [selectedSidebarIndex,setSelectedSidebarIndex] = useState<number>(0);

    return (
        <div className="p-4 w-72 h-full border-r border-slate-200">
            <div className="flex flex-col gap-3">
                <div className="gap-2 flex flex-row items-center border px-5 py-3 rounded-xl border-slate-200">
                    <IconView iconName="search" style="text-slate-500" strokeWidth={2}></IconView>
                    <p className="text-slate-400 font-light">Mock Search</p>
                    {/* <input placeholder="Mock Search bar" className="border-0"></input> */}
                </div>
                {
                    sidebarItems?.map((sidebarItem,index) => {
                        const isSelected = index === selectedSidebarIndex;
                        return (
                            <SidearItem key={index} sidebarHref={sidebarItem.sidebarHref} itemName={sidebarItem.sidebarLabel} isSelected={isSelected}
                                onClick={() => {
                                    setSelectedSidebarIndex(index);
                                }}
                            >
                                <IconView iconName={sidebarItem.iconName} style={`${ isSelected ? 'text-violet-600':'text-zinc-400'}`} strokeWidth={2}></IconView>
                            </SidearItem>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Sidebar;