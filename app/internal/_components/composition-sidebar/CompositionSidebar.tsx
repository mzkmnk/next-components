// csr
"use client"

import { useState } from "react";
import IconView, { TIconName } from "../icon-view/icon-view";
import CompositionSidearItem from "./CompositionSidebarItem";
import { create } from "zustand";

// Zustand (別ファイルで切り出した方がいいが仕方なし...)

export type TSidebarLabel = 'github'|'twitter'|'instagram'|'youtube';

export type TSidebarStore = {
    sidebarLabel:TSidebarLabel;
    setSidebarLabel:(sidebarLabel:TSidebarLabel) => void
}

export const useSidebarStore = create<TSidebarStore>((set) => ({
    sidebarLabel:'github',
    setSidebarLabel:(sidebarLabel) => set(() => {
        console.log('sidebarItem',sidebarLabel);
        return {sidebarLabel}
    })
}))

// ↓本体↓

export type TCompositionSidebar = {
    sidebarItems?:{
        sidebarLabel:TSidebarLabel,
        iconName:TIconName
    }[]
}

const CompositionSidebar = ({sidebarItems}:TCompositionSidebar) => {

    const {setSidebarLabel} = useSidebarStore();

    const [selectedSidebarIndex,setSelectedSidebarIndex] = useState<number>(0);

    return (
        <div className="p-3 w-80 h-full border-r border-slate-200">
            <div className="flex flex-col gap-3">
                <div className="gap-2 flex flex-row items-center border p-2 rounded-xl border-slate-200">
                    <IconView iconName="search" style="text-slate-400" strokeWidth={1.25}></IconView>
                    <p className="text-slate-400 font-light">Mock Search</p>
                </div>
                {
                    sidebarItems?.map((sidebarItem,index) => {
                        const isSelected = index === selectedSidebarIndex;
                        return (
                            <CompositionSidearItem key={index} itemName={sidebarItem.sidebarLabel} isSelected={isSelected}
                                onClick={() => {
                                    setSelectedSidebarIndex(index);
                                    setSidebarLabel(sidebarItem.sidebarLabel);
                                }}
                            >
                                <IconView iconName={sidebarItem.iconName} style={`${ isSelected ? 'text-violet-600':'text-zinc-400'}`} strokeWidth={1.7}></IconView>
                            </CompositionSidearItem>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default CompositionSidebar;