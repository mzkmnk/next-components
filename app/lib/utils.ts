import { ClassValue } from "class-variance-authority/types";
import clsx from "clsx";
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs:ClassValue[]):string => {
    console.log(twMerge(clsx(inputs)));
    return twMerge(clsx(inputs));
};