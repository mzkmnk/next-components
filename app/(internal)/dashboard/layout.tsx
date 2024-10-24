import { ReactNode } from "react"
import { ClientSidebar } from "./components/sidebar/ClientSidebar";
import { ServerSidebar } from "./components/sidebar/ServerSidebar";

const Layout = async ({children}:{children:ReactNode}) => {


    return (
        <div className="w-screen h-screen flex flex-row">
            <ServerSidebar></ServerSidebar>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default Layout;