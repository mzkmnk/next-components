"use client"

import Image from "next/image";
import IconView, { TIconName } from "../icon-view/icon-view";
import SidebarItem from "./sidebar-item";
import React, { useState } from "react";
import { TChipStyle } from "../chip/chip";

export type TSidebarItem = {
    iconName:TIconName,
    itemLabel:string,
    chip?:{severity:TChipStyle,chipLabel:string},
    component:React.ComponentType,
    isSelected:boolean
}

const Sidebar = ({items}:{items:Omit<TSidebarItem,'isSelected'>[]}) => {

    const [isOpen,setIsOpen] = useState<boolean>(true);

    const [selectedSidebarItem,setSelectedSidebarItem] = useState<number>(0);

    const [sidebarItems,setSidebarItems] = useState<TSidebarItem[]>(
        items.map((item,index) => {
            return {...item,isSelected:index === 0}
        }),
    );

    return (
        <div className="flex flex-row h-screen w-screen">
            <div className={`py-1 px-2 h-full flex flex-col justify-between gap-8 border-slate-200 border-r-[1.25px] mx-2 duration-300 ${isOpen ? 'w-72':'w-20'}`}>
                <div className="flex flex-col gap-4">
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
                    <div className={`flex flex-col gap-2 ${isOpen ? '':'items-center'}`}>
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
                <div className={`duration-100 ${isOpen ? 'opacity-100':'opacity-0'}`}>
                    <div className="border-t-[1.5px] my-2"></div>
                    <div className="w-full flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <Image className="rounded-full" src="/service-icon.png" width={35} height={35} alt="service-icon" />
                            <div>
                                <p className="text-slate-700 font-semibold">MzkMnk</p>
                                <small className="text-slate-400">mzkmnk@example.com</small>
                            </div>
                        </div>
                        <IconView iconName="dotsVertical" style="p-2 hover:bg-slate-200 rounded-full cursor-pointer duration-200 text-slate-500" width={15} height={15}></IconView>
                    </div>  
                </div>
            </div>
            <div>
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