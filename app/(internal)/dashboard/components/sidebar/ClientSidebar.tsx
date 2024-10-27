"use client"

import {TReposResponse} from "@/api/dashboard/repos/route"
import {cn} from "@/lib/utils";
import {FolderGit2, GitCompare} from "lucide-react"
import {redirect} from "next/navigation";
import {useState} from "react"

export type TSidebarItem = 'Contributions'|'Repositories';

export const ClientSidebar = ({repos}:{repos:TReposResponse}) => {

    const [clickItem,setClickItem] = useState<string>('contributions');


    return (
        <div className="flex flex-col gap-2 h-full w-96 py-2 overflow-y-auto">
            {/* contributions */}
            <div
                className={cn("flex flex-col p-2 cursor-pointer rounded-md duration-200 text-slate-400",{
                    "hover:bg-slate-200 hover:font-semibold":clickItem !== 'contributions',
                    "bg-slate-100 border-l-4 border-blue-500" : clickItem === 'contributions',
                })}
                onClick={() => {
                    setClickItem(() => 'contributions')
                    redirect('/dashboard/contributions')
                }}
                >
                <div className={cn("flex flex-row items-center gap-2",{
                    "text-blue-600 font-semibold":clickItem === 'contributions'
                })}>
                    <GitCompare width={16} strokeWidth={2} />
                    <p>Contributions</p>
                </div>
            </div>
            {/* repos  */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col p-2">
                    <div className="flex flex-row gap-2 items-center ">
                    <FolderGit2 className="text-slate-700" width={16} strokeWidth={2} />
                        <p className="text-slate-800 text-lg font-semibold">Repositories</p>
                    </div>
                </div>
                <div className={"flex flex-row items-center"}>
                    <div className={"border-r-2 ml-5 border-slate-300 h-full"}></div>
                    <div className="flex flex-col gap-2">
                        {
                            repos.nodes.map((repo,index) => {
                                return (
                                    <div key={index} className={"flex items-center flex-row gap-2"}>
                                        <div className={"before:content-[''] before:w-5 before:border-slate-300 before:border flex items-center"}></div>
                                        <div
                                            className={cn("flex rounded-full text-slate-400 font-semibold text-lg")}
                                            onClick={() => {
                                                setClickItem(() => repo.name)
                                                redirect(`/dashboard/repositories/${repo.name}`)
                                            }}
                                            >
                                            <p
                                                className={cn("flex items-center px-4 py-2 rounded-full duration-200", {
                                                    "hover:bg-slate-200 hover:text-lg hover:text-slate-800 cursor-pointer":clickItem !== repo.name,
                                                    "bg-slate-300 text-slate-900": clickItem === repo.name,
                                                }
                                            )}>
                                                {repo.name}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
