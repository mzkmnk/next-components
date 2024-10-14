"use client"

import Timeline from "../_components/timeline/timeline";

const TimelinePreview = () => {
    return(
        <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
            <h2 className="text-slate-700 w-full text-left">Timeline</h2>
            <div className="border rounded-xl p-7">
                <Timeline></Timeline>
            </div>
        </div>
    )
}

export default TimelinePreview;