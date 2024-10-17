"use client"

import { useEffect, useState } from "react";
import IconView from "../icon-view/icon-view";

const Timeline = () => {

    let nowStepIndex : number = 0;

    const [progress,setProgress] = useState<number>(0);

    const [steps,setSteps] = useState<{
        checked:boolean,
        percentage:number,
    }[]>(
        Array(7).fill(0).map((_v,index) => {
            return {
                checked:index === 0,
                percentage:0,
            };
        })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const newVal = Math.floor(Math.random() * (40-1))+1;
            setSteps((steps) => {
                steps[nowStepIndex].percentage = Math.min(steps[nowStepIndex].percentage+newVal,100);
                if(steps[nowStepIndex].percentage === 100){
                    steps[nowStepIndex+1].checked = true;
                    nowStepIndex++;
                    setProgress((progress) => Math.min(Math.round(progress + 100/(steps.length-1)),100));
                    if(nowStepIndex === steps.length-1){clearInterval(interval);}
                }
                return [...steps];
            });
        },500);

        return () => clearInterval(interval);
    },[]);

    return (
        <div className="flex flex-col gap-2">
            <div>
                {
                    steps[steps.length-1].checked ?
                    <div>
                        <p className="text-xl text-slate-700">Completed</p>
                    </div>
                    :
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-xl text-slate-700">Processing<span className="tracking-widest">...</span></p>
                        <p className="min-w-10 text-lg text-blue-500">{progress}%</p>
                    </div>
                }
            </div>
            <div className="flex flex-row w-full">
                {
                    steps.map((step,index) => {
                        return (
                            <div key={index} className="flex flex-col items-start gap-2">
                                <div className="flex items-center flex-row">
                                    <div className={`flex items-center justify-center rounded-full w-8 h-8 ${step.checked ? 'bg-blue-500':'border border-slate-300'}`}>
                                        {step.checked ? <IconView iconName="check" style="text-white"></IconView> : <p className="text-slate-400">{index+1}</p>}
                                    </div>
                                    {
                                        index !== steps.length-1 && 
                                        <div className={`rounded-full h-[1.75px] w-20 mx-1 bg-slate-300`}>
                                            <div
                                                className='duration-200 rounded-full bg-blue-500 h-full'
                                                style={{width:`${step.percentage}%`}}
                                            ></div>
                                        </div>
                                    }
                                </div>
                                <p className="text-slate-600">Step {index+1}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Timeline;