import { ReactNode } from "react"
import Sidebar from "./components/sidebar";
import { auth } from "@/lib/auth";
import { NextAuthProvider } from "./nextAuthProvider";

const Layout = async ({children}:{children:ReactNode}) => {

    const session = await auth();

    return (
        <NextAuthProvider session={session}>
            <div className="w-screen h-screen flex flex-row">
                <Sidebar></Sidebar>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </NextAuthProvider>
    )
}

export default Layout;