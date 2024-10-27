import {ReactNode} from "react"
import {ServerSidebar} from "./components/sidebar/ServerSidebar";

const Layout = async ({children}:{children:ReactNode}) => {


    return (
        <div className="w-screen h-screen flex flex-row">
            <ServerSidebar></ServerSidebar>
            <div className="flex-1 overflow-y-auto my-2 mx-2">
                {children}
            </div>
        </div>
    )
}

export default Layout;
