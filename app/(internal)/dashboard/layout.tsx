import { ReactNode } from "react"
import Sidebar from "./components/sidebar";

const Layout = async ({children}:{children:ReactNode}) => {


    return (
        <div className="w-screen h-screen flex flex-row">
            <Sidebar></Sidebar>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default Layout;