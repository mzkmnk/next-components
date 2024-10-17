// ssr (sidebarにimportしているのでcsr)

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TSidebarHref } from "../../layout";

export type TSidebarItem = {
    children:ReactNode,
    itemName:string;
    sidebarHref:TSidebarHref
    className?:string;
    isSelected:boolean;
    onClick?: () => void,
};

const SidebarItem = ({children,itemName,className,sidebarHref,isSelected,...props}:TSidebarItem) => {

    return (
        <Link href={sidebarHref}>
            <div className={twMerge(clsx('rounded-lg duration-200 font-semibold gap-3 flex flex-row items-center text-sm px-2 py-4 text-zinc-400 cursor-pointer',{
                'bg-violet-100 text-violet-700':isSelected
            }),className)} {...props}>
                {children}
                <p>{itemName}</p>
            </div>
        </Link>
    
    )
};

export default SidebarItem;