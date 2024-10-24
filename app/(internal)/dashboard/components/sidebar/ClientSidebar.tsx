"use client"

import { TReposResponse } from "@/api/repos/route"
import { ChevronDown, ChevronLeft, ChevronRight, FolderClosed, FolderOpen } from "lucide-react"
import { useState } from "react"

export const ClientSidebar = ({repos}:{repos:TReposResponse}) => {

    const [reposOpen,setReposOpen] = useState<boolean>(false);


    return (
        <div className="h-full w-80 border-r px-3 py-2">
            {/* repos  */}
            <div className="flex flex-col">
                <div className="w-full flex flex-row justify-between items-center hover:bg-slate-200 rounded-lg p-2 duration-150 cursor-pointer" onClick={ () => setReposOpen((val) => !val)}>
                    <div className="flex flex-row gap-2 items-center ">
                        {
                            reposOpen ? <FolderOpen className="text-slate-500" width={18} strokeWidth={1.75} /> : <FolderClosed className="text-slate-500" width={18} strokeWidth={1.75} />
                        }
                        <p className="text-slate-500 text-xl">Repositories</p>
                    </div>
                    {
                        reposOpen ? <ChevronDown className="text-slate-500" width={18} strokeWidth={1.9} /> : <ChevronLeft className="text-slate-500" width={18} strokeWidth={1.9} />
                    }
                </div>
            </div>
        </div>
    )
}