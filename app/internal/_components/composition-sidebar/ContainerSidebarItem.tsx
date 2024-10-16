import { ReactNode } from "react"

const ContainerSidebarItem = ({children}:{children?:ReactNode}) => {
    return (
        <div className="h-full w-full">
            {children}
        </div>
    )
}

export default ContainerSidebarItem;