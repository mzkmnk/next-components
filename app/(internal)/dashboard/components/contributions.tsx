"use client"

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useContributions } from "../hooks/useContributions";
import { useEffect, useState } from "react";
import { differenceInDays, parseISO } from "date-fns";

export const heatMapCellVariants = cva('h-7 w-7 border rounded-md',{
    variants:{
        variant:{
            level0:'',
            level1:'bg-green-100 border-green-100',
            level2:'bg-green-300 border-green-300',
            level3:'bg-green-400 border-green-400',
            level4:'bg-green-500 border-green-500',
        }
    },
    defaultVariants:{}
});

export type TContributions = {
    [diff in string]:{
        contributionCount: number;
        date:string;
    }
}

export type THeatMapCellVariantProps = VariantProps<typeof heatMapCellVariants>;

export type THeatMapCellVariant = THeatMapCellVariantProps['variant'];

const Contributions = () => {

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const [contributions,setContributions] = useState<TContributions>();

    const [contributionsCnt,setContributionsCnt] = useState<number>(0);

    const { getContributions } = useContributions();

    useEffect(() => {
        (async() => {
            const data = await getContributions('mzkmnk'); // todo auth()から取得
            setContributions(() => {
                const value:TContributions = {};
                data.contributions.map((contribution) => {
                    setContributionsCnt((cnt) => {
                        return cnt+contribution.contributionCount
                    });
                    value[differenceInDays(parseISO(contribution.date) ,parseISO('2024-01-01'))] = {
                        contributionCount:contribution.contributionCount,
                        date:contribution.date,
                    };
                })
                return value;
            })
        })();
    },[]);

    const getVariant = (cnt:number):THeatMapCellVariant => {
        return cnt >= 4 ? 'level4' : cnt >= 3 ? 'level3' : cnt >=2 ? "level2" : cnt >=1 ? "level1":"level0"
    }



    return (
        <div className="flex flex-col w-[60rem] border rounded-xl border-slate-300 p-5">
            <p className=" text-xl font-semibold text-slate-800">Project Contributes<span>{contributionsCnt}</span></p>
            <div className="overflow-x-auto">
                <table className="border-spacing-2 border-separate table-fixed w-max">
                    <thead>
                        <tr>
                            {
                                months.map((month,index) => {
                                    return(
                                        <td key={index} colSpan={4}>
                                            <p>{month}</p>
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(7).fill(0).map((_,indexY) => {
                                return (
                                    <tr key={indexY} className="h-6">
                                        {
                                            Array(51).fill(0).map((_,indexX) => {
                                                const idx:number = 7*indexX+indexY;
                                                return(
                                                    <td key={indexY+indexX}>
                                                        <div className={cn(heatMapCellVariants({
                                                            variant:getVariant(contributions && contributions?.hasOwnProperty(idx) ? contributions[idx].contributionCount : 0)
                                                        }))}></div>
                                                    </td>
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
            <div className="w-full flex justify-start items-center flex-row-reverse gap-4">
                <p className="text-slate-700">Less</p>
                <div className={cn(heatMapCellVariants({variant:'level0'}))}></div>
                <div className={cn(heatMapCellVariants({variant:'level1'}))}></div>
                <div className={cn(heatMapCellVariants({variant:'level2'}))}></div>
                <div className={cn(heatMapCellVariants({variant:'level3'}))}></div>
                <div className={cn(heatMapCellVariants({variant:'level4'}))}></div>
                <p className="text-slate-700">More</p>
            </div>
        </div>
    )
};

export default Contributions;