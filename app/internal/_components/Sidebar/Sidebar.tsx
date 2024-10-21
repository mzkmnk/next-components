// csr
"use client"

import { useState } from "react";
import { TIconName } from "../icon-view/icon-view";
import Link from "next/link";
import { cn } from "@/lib/utils";


export type TSidebarItem = {
    sidebarLabel:string,
    iconName?:TIconName,
    sidebarHref: string,
};

export type TSidebar = {
    sidebarItems:TSidebarItem[]
}

const Sidebar = ({sidebarItems}:TSidebar) => {

    const [selectedSidebarIndex,setSelectedSidebarIndex] = useState<number>(0);

    return (
        <div className="p-4 w-72 h-full overflow-y-auto hidden-scrollbar">
            <div className="flex flex-col gap-2">
                <p className="font-semibold dark:text-white">Components</p>
                {
                    sidebarItems.map((sidebarItem,index) => {
                        return (
                            <Link key={index} href={sidebarItem.sidebarHref} className="indent-4" onClick={() => setSelectedSidebarIndex(index)}>
                                <p className={cn('hover:underline hover:underline-offset-1 duration-300 text-slate-500 dark:text-slate-400 dark:font-light',{
                                    'text-slate-800 dark:text-slate-50 font-semibold underline underline-offset-1':selectedSidebarIndex === index
                                })}>{sidebarItem.sidebarLabel}</p>
                            </Link>
                        )
                    })
                }
            </div>
            {/* 別コンポーネント
            <div className="flex flex-col gap-3">
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
            </div> */}
        </div>
    )
};

export default Sidebar;