import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type TCompositionSidebarItem = {
    children:ReactNode,
    itemName:string;
    className?:string;
    isSelected:boolean;
    onClick?: () => void,
};

const CompositionSidebarItem = ({children,itemName,className,isSelected,...props}:TCompositionSidebarItem) => {
    return (
        <div className={twMerge(clsx('gap-2 flex flex-row items-center p-2 text-slate-600',{
            'rounded-xl bg-cyan-50 text-cyan-400 font-semibold':isSelected
        }),className)} {...props}>
            {children}
            <p>{itemName}</p>
        </div>
    )
};

export default CompositionSidebarItem;