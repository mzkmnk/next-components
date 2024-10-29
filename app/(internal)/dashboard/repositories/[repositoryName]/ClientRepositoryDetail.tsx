"use client"

import {
    ChevronDown,
    ChevronUp,
    GitCommitHorizontal,
    GitPullRequestCreateArrow,
    SquareArrowOutUpRight
} from "lucide-react";
import {TBrunchResponse, TCommitResponse} from "@/api/dashboard/repository-details/[repositoryName]/route";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {format} from "date-fns";
import {useEffect, useState} from "react";

export const ClientRepositoryDetail = ({brunches}:{brunches:TBrunchResponse[]}) => {

    const [isOpenSelect,setIsOpenSelect] = useState<boolean>(false);

    const [showCommits,setShowCommits] = useState<TCommitResponse[]>(brunches[0].commits)

    const [selectedBrunch,setSelectedBrunch] = useState<{idx:number,name:string}>({
        idx:0,
        name:brunches[0].name
    });

    useEffect(() => {
        setShowCommits(brunches[selectedBrunch.idx].commits);
    }, [selectedBrunch]);

    const brunchesName:{idx:number,name:string}[] = brunches.flatMap((brunch,idx)=> {
            return {
                idx,
                name:brunch.name
            }
        })

    return (
        <div className={"flex flex-col gap-4"}>
            <div>
                <div
                    className={"relative border rounded-lg w-72 flex items-center justify-between gap-2 h-10 p-2 cursor-pointer shadow"}
                    onClick={() => {
                        setIsOpenSelect((val) => !val)
                    }}
                >
                    <p className={"font-semibold truncate"}>{selectedBrunch?.name}</p>
                    {
                        isOpenSelect ? <ChevronUp strokeWidth={3} width={12}></ChevronUp> :<ChevronDown strokeWidth={3} width={12}></ChevronDown>
                    }
                    {
                        isOpenSelect &&
                        <div
                            className={"shadow absolute z-50 top-11 flex flex-col gap-1 p-2 left-0 bg-white border rounded-lg w-72"}
                        >
                            {
                                brunchesName.map((brunch,key) => (
                                    <div
                                        key={key}
                                        className={cn("p-2 rounded-lg",{
                                            'hover:bg-gray-100 cursor-pointer':brunch.name !== selectedBrunch?.name,
                                            'bg-gray-100':brunch.name === selectedBrunch?.name
                                        })}
                                        onClick={() => {
                                            setSelectedBrunch(brunch);
                                        }}
                                    >
                                        <p>{brunch.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
            <div className={"border border-slate-200 rounded-xl"}>
                <table className={"w-full table-fixed"}>
                    <thead className={"border-b border-slate-200 text-slate-500 h-14"}>
                    <tr>
                        <th className={"text-start px-5 py-2"}>Commit</th>
                        <th className={"text-start px-5 py-2 w-64"}>User</th>
                        <th className={"text-start px-5 py-2 w-52"}>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        showCommits.map((commit: TCommitResponse, key: number) => {
                            return (
                                <tr key={key} className={cn("", {
                                    "bg-slate-100": key % 2 === 0
                                })}>
                                    <td className={"px-5 py-2 duration-300"}>
                                        <Link href={commit.url}>
                                            <div className={"flex gap-2 items-center group"}>
                                                {
                                                    commit.associatedPullRequests.nodes.length > 0 ?
                                                        <GitPullRequestCreateArrow className={"text-blue-500"}
                                                                                   strokeWidth={2}
                                                                                   width={17}
                                                        ></GitPullRequestCreateArrow>
                                                        :
                                                        <GitCommitHorizontal className={"text-emerald-500"}
                                                                             strokeWidth={2}
                                                                             width={17}
                                                        ></GitCommitHorizontal>
                                                }
                                                <p
                                                    className={"text-slate-800 font-semibold inline relative after:bg-slate-800 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-200 cursor-pointer"}
                                                >
                                                    {commit.messageHeadline}
                                                </p>
                                                <SquareArrowOutUpRight
                                                    strokeWidth={2}
                                                    width={12}
                                                ></SquareArrowOutUpRight>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className={"px-5 py-2"}>
                                        <div className={"flex flex-row gap-2 items-center"}>
                                            <Image className={"rounded-full"} src={commit.author.avatarUrl} width={25}
                                                   height={25} alt={'userIcon'}></Image>
                                            <Link href={commit.author.user.url}>
                                                <p className={"inline relative after:bg-slate-800 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer"}>
                                                    {commit.author.user.login}
                                                </p>
                                            </Link>
                                        </div>
                                    </td>
                                    <td className={"px-5 py-2"}>
                                        <p>{format(commit.committedDate, 'yyyy/MM/dd hh:mm')}</p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className={"border-t flex gap-2 items-center px-5 h-14 w-full"}>
                    <p className={"text-slate-500"}>
                        Total
                    </p>
                    <p className={"font-semibold text-slate-900"}>
                        {showCommits.length}
                    </p>
                </div>
            </div>
        </div>
    );
};
