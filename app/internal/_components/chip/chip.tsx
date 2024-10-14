import { ReactNode } from "react";
import { cva,VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const chipVariants = cva("px-3 py-2 border rounded-lg",{
    variants:{
        variant:{
            primary:"text-blue-600 border-blue-200 bg-blue-100",
            secondary:"",
            warning:"text-orange-600 border-orange-200 bg-orange-100",
            danger:"",
        }
    },
    defaultVariants:{
        variant:"primary",
    },
});

type TChipProps = {
    children:ReactNode,
    className?:string,
}

const Chip = ({children,className,variant}:TChipProps & VariantProps<typeof chipVariants>) => {

    return(
        <div className={twMerge(chipVariants({variant,className}))}>
            <p className={`font-semibold`}>
                {children}
                Preview
            </p>
        </div>
    )
};

export default Chip;