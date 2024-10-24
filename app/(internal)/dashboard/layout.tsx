import { ReactNode } from "react"
import { ClientSidebar } from "./components/sidebar/ClientSidebar";

const Layout = async ({children}:{children:ReactNode}) => {


    return (
        <div className="w-screen h-screen flex flex-row">
            <ClientSidebar></ClientSidebar>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default Layout;