// ssr (sidebarにimportしているのでcsr)

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
        <div className={twMerge(clsx('rounded-lg font-semibold gap-3 flex flex-row items-center text-sm px-2 py-4 text-zinc-400 cursor-pointer',{
            'bg-violet-100 text-violet-700 duration-300':isSelected
        }),className)} {...props}>
            {children}
            <p>{itemName}</p>
        </div>
    )
};

export default CompositionSidebarItem;