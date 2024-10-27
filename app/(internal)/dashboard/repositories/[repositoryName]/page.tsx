import {format} from 'date-fns';
import {TCommitResponse, TRepositoryResponse} from "@/api/dashboard/repository-details/[repositoryName]/route";
import Link from "next/link";
import {SquareArrowOutUpRight} from "lucide-react";
import Image from "next/image";
import {cn} from "@/lib/utils";

const Page = async ({params}:{params:Promise<{repositoryName:string}>}) => {

    const { repositoryName } = await params;

    const response = await fetch(`${process.env.API_PREFIX}/api/dashboard/repository-details/${repositoryName}`);

    const {commitsTotalCount,commits}:TRepositoryResponse = await response.json();

    return (
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
                    commits.map((commit: TCommitResponse, key: number) => {
                        return (
                            <tr key={key} className={cn("",{
                                "bg-gray-100":key%2===0
                            })}>
                                <td className={"px-5 py-2 hover:underline duration-300"}>
                                    <Link href={commit.url}>
                                        <div className={"flex gap-2 items-center"}>
                                            <p className={"text-slate-800 font-semibold"}>{commit.messageHeadline}</p>
                                            <SquareArrowOutUpRight strokeWidth={2} width={12}></SquareArrowOutUpRight>
                                        </div>
                                    </Link>
                                </td>
                                <td className={"px-5 py-2"}>
                                    <div className={"flex flex-row gap-2 items-center"}>
                                        <Image className={"rounded-full"} src={commit.author.avatarUrl} width={25} height={25} alt={'userIcon'}></Image>
                                        <Link href={commit.author.user.url}>
                                            <p className={"hover:underline"}>{commit.author.user.login}</p>
                                        </Link>
                                    </div>
                                </td>
                                <td className={"px-5 py-2"}>
                                    <p>{format(commit.committedDate,'yyyy/MM/dd hh:mm')}</p>
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
                    {commitsTotalCount}
                </p>
            </div>
        </div>
    )
};

export default Page;
