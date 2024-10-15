"use client"

// https://dribbble.com/shots/24348644-Side-Navigation-Animation

import { ReactNode } from "react";
import IconView from "../icon-view/icon-view";
import CompositionSidearItem from "./CompositionSidebarItem";

export type TCompositionSidebar = {
    children? : ReactNode
}

const CompositionSidebar = ({children}:TCompositionSidebar) => {
    return (
        <div className="w-full h-full flex flex-row">
            {/* sidebar */}
            <div className="p-3 w-80 h-full border-r border-slate-200">
                {/* sidebar item */}
                <div className="flex flex-col gap-4">
                    <div className="gap-2 flex flex-row items-center border p-2 rounded-xl border-slate-200">
                        <IconView iconName="search" style="text-slate-400" strokeWidth={1.25}></IconView>
                        <p className="text-slate-400 font-light">Mock Search</p>
                    </div>
                    <CompositionSidearItem itemName="github" isSelected={true}>
                        <IconView iconName="githubIcon" style="text-slate-400" strokeWidth={1.25}></IconView>
                    </CompositionSidearItem>
                    <CompositionSidearItem itemName="Youtube" isSelected={false}>
                        <IconView iconName="sidebar" style="text-slate-400" strokeWidth={1.25}></IconView>
                    </CompositionSidearItem>
                    <CompositionSidearItem itemName="Instagram" isSelected={false}>
                        <IconView iconName="sidebar" style="text-slate-400" strokeWidth={1.25}></IconView>
                    </CompositionSidearItem>
                </div>
            </div>
            {/* children */}
            <div className="h-full w-full">
                {children}
            </div>
        </div>
    )
};

export default CompositionSidebar;