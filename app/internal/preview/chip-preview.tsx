"use client"

import Chip from "../_components/chip/chip";

const ChipPreview = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-left w-full">Chip</h2>
            <div className="flex flex-col gap-2 border rounded-xl w-full p-3">
                <Chip variant={'primary'}>test</Chip> 
                <Chip variant={'warning'}>test2</Chip> 
            </div>
        </div>
    )
};

export default ChipPreview;