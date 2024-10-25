"use client"

import { TReposResponse } from "@/api/repos/route"
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, FolderClosed, FolderOpen, GitCompare } from "lucide-react"
import { useState } from "react"

export type TSidebarItem = 'Contributions'|'Repositories';

export const ClientSidebar = ({repos}:{repos:TReposResponse}) => {

    const [reposOpen,setReposOpen] = useState<boolean>(false);

    const [clickItem,setClickItem] = useState<TSidebarItem>('Contributions');


    return (
        <div className="h-full w-96 border-r px-3 py-2">
            {/* contributions */}
            <div className={cn("flex flex-col hover:bg-slate-200 rounded-lg p-2 duration-150 cursor-pointer",{
                'bg-slate-200':clickItem === 'Contributions',
            })}>
                <div className="flex flex-row items-center gap-2">
                    <GitCompare className="text-slate-500" width={16} strokeWidth={1.75} />
                    <p className="text-slate-500 text-lg">Contributions</p>
                </div>
            </div>
            {/* repos  */}
            <div className="flex flex-col">
                <div className="w-full flex flex-row justify-between items-center hover:bg-slate-200 rounded-lg p-2 duration-150 cursor-pointer" onClick={ () => setReposOpen((val) => !val)}>
                    <div className="flex flex-row gap-2 items-center ">
                        {
                            reposOpen ?
                            <FolderOpen className="text-slate-500" width={16} strokeWidth={1.6} />:
                            <FolderClosed className="text-slate-500" width={16} strokeWidth={1.6} />
                        }
                        <p className="text-slate-500 text-lg">Repositories</p>
                    </div>
                    {
                        reposOpen ?
                        <ChevronDown className="text-slate-500" width={18} strokeWidth={1.8} />:
                        <ChevronLeft className="text-slate-500" width={18} strokeWidth={1.8} />
                    }
                </div>
                <div className="flex flex-col gap-4 indent-11">
                    {
                        reposOpen &&
                        <>
                            {
                                repos.nodes.map((repo,index) => {
                                    return (
                                        <div key={index}>
                                            <p className="text-slate-500">{repo.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}