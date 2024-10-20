import { cn } from "@/lib/utils";

const Page = () => {

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col w-[60rem] border rounded-xl border-slate-300 p-5">
                <p>contributions Graph</p>
                <div className="overflow-x-auto">
                    <table className="border-spacing-2 border-separate table-fixed w-max">
                        <thead>
                            <tr>
                                {
                                    months.map((month) => {
                                        return(
                                            <td colSpan={4}>
                                                <p>{month}</p>
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array(7).fill(0).map((_,indexX) => {
                                    return (
                                        <tr key={indexX} className="h-6">
                                            {
                                                Array(51).fill(0).map((_,indexY) => {
                                                    return(
                                                        <td key={indexY+indexX} className={cn("w-6 border rounded-md",
                                                            {
                                                                "bg-green-400 border-green-400":(indexY+indexX)%5===0,
                                                                "bg-green-200 border-green-200":(indexY+indexX)%3===0,
                                                            }
                                                        )}></td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Page;