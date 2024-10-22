"use client"

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { TContributions } from "../hooks/useContributions";

export const heatMapCellVariants = cva('h-7 w-7 border rounded-md hover:cursor-pointer hover:border',{
    variants:{
        variant:{
            level0:'',
            level1:'bg-green-100 border-green-100',
            level2:'bg-green-300 border-green-300',
            level3:'bg-green-400 border-green-400',
            level4:'bg-green-500 border-green-500',
        }
    },
    defaultVariants:{
        variant:'level0'
    }
});

export type THeatMapCellVariantProps = VariantProps<typeof heatMapCellVariants>;

export type THeatMapCellVariant = THeatMapCellVariantProps['variant'];

export const ClientContributions = ({contributions,contributionsCnt}:{contributions:TContributions,contributionsCnt:number}) => {

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const getVariant = (cnt:number):THeatMapCellVariant => {
        return cnt >= 4 ? 'level4' : cnt >= 3 ? 'level3' : cnt >=2 ? "level2" : cnt >=1 ? "level1":"level0"
    }



    return (
        <div className="flex flex-col w-[40rem] border rounded-xl border-slate-300 p-5">
            <div className="flex flex-row gap-2 items-center text-xl font-semibold text-slate-800">
                <p>Project Contributes</p>
                <p>{contributionsCnt}</p>
            </div>
            <div className="overflow-x-auto hidden-scrollbar">
                <table className="border-spacing-2 border-separate table-fixed w-max">
                    <thead>
                        <tr>
                            {
                                months.map((month,index) => {
                                    return(
                                        <td key={index} colSpan={5}>
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
                                            Array(53).fill(0).map((_,indexX) => {
                                                const idx:number = 7*indexX+indexY;
                                                return(
                                                    <td key={indexY+indexX}>
                                                        {
                                                            7*indexX+indexY <= 366 && <div className={cn(heatMapCellVariants({
                                                                variant:getVariant(contributions && contributions?.hasOwnProperty(idx) ? contributions[idx].contributionCount : 0)
                                                            }))}></div>
                                                        }
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