import { cn } from "@/lib/utils"

export const Skeleton = ({className}:{className:string}) => {
    return (
        <div className={cn("animate-pulse rounded-xl bg-gray-200",className)}>
        </div>
    )
}