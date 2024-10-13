"use client"

import IconView, { TIconName } from "../icon-view/icon-view";
import SidebarItem from "./sidebar-item";
import React, { useState } from "react";
import { TChipStyle } from "../chip/chip";
import SidebarProfile from "./sidebar-profile";

export type TSidebarItem = {
    iconName:TIconName,
    itemLabel:string,
    chip?:{severity:TChipStyle,chipLabel:string},
    component:React.ComponentType,
    isSelected:boolean
}

export type TProfile = {
    username:string,
    email:string,
    imagePath:string,
}

const Sidebar = ({items,profile}:{items:Omit<TSidebarItem,'isSelected'>[],profile:TProfile}) => {

    const [isOpen,setIsOpen] = useState<boolean>(true);

    const [selectedSidebarItem,setSelectedSidebarItem] = useState<number>(0);

    const [sidebarItems,setSidebarItems] = useState<TSidebarItem[]>(
        items.map((item,index) => {
            return {...item,isSelected:index === 0}
        }),
    );

    return (
        <div className="flex flex-row h-full w-full">
            <div className={`py-1 px-2 h-full flex flex-col justify-between gap-2z border-slate-200 border-r-[1.25px] mx-2 duration-300 ${isOpen ? 'w-80':'w-20'}`}>
                <div className="overflow-hidden flex flex-col gap-4">
                    <div className={`flex items-center ${isOpen ?'justify-between':'justify-center'}`}>
                        {isOpen && <p className="text-slate-700 text-xl">Project</p>}
                        {
                            isOpen ?
                            <IconView
                                style="p-2 hover:bg-slate-200 rounded-full cursor-pointer duration-200"
                                strokeWidth={1.5}
                                onClick={() => setIsOpen(!isOpen)}
                                iconName="leftCollapse"
                            ></IconView>
                            : 
                            <IconView
                                style="p-2 hover:bg-slate-200 rounded-full cursor-pointer duration-200"
                                strokeWidth={1.5}
                                onClick={() => setIsOpen(!isOpen)}
                                iconName="rightCollapse"
                            ></IconView>
                        }
                    </div>
                    <div className={`overflow-y-auto hidden-scrollbar flex flex-col gap-2 ${isOpen ? '':'items-center'}`}>
                        <SidebarItem iconName='search' itemLabel='Search' isOpen={isOpen}></SidebarItem>
                        {sidebarItems.map((sidebarItem,index) => {
                            return (
                            <SidebarItem key={index} onClick={() => {
                                setSelectedSidebarItem(index);
                                setSidebarItems((value) => {
                                    value.map((sidebarItem) => {
                                        sidebarItem.isSelected = false;
                                    })
                                    value[index].isSelected = true;
                                    return [...value];
                                });
                            }} iconName={sidebarItem.iconName} itemLabel={sidebarItem.itemLabel} chip={sidebarItem.chip} isOpen={isOpen} isSelected={sidebarItem.isSelected}></SidebarItem>
                        )
                        })}
                    </div>
                </div>
                {
                    profile && 
                    <SidebarProfile isOpen={isOpen} profile={profile}></SidebarProfile>
                }
            </div>
            <div className="flex items-center justify-center w-full overflow-y-auto">
                {
                    sidebarItems.map((sidebarItem,index) => {
                        if(index === selectedSidebarItem){
                            const Component = sidebarItem.component;
                            return (
                                <Component key={index}></Component>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;