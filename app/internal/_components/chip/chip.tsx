import { cn } from '@/lib/utils';
import { cva,VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

export const chipVariants = cva("flex font-semibold items-center px-3 py-2 w-32 h-10 border rounded-lg",{
    variants:{
        variant:{
            primary:"text-blue-600 border-blue-200 bg-blue-100",
            secondary:"text-emerald-600 border-emerald-200 bg-emerald-100",
            warning:"text-orange-600 border-orange-200 bg-orange-100",
            danger:"text-red-600 border-red-200 bg-red-100",
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
        <div className={cn(chipVariants({variant,className}))}>
            <p className="flex items-center justify-center w-full">
                {children}
            </p>
        </div>
    )
};

export default Chip;
