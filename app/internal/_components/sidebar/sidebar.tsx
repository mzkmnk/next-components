import SidebarItem from "./sidebar-item";

const Sidebar = () => {
    return (
        <div className="w-1/5 py-5 px-2 flex flex-col justify-between gap-8 border-slate-200">
            <div className="flex flex-col gap-4">
                <p className="px-2 text-slate-400">Workspace</p>
                <div className="flex flex-col gap-2">
                    <SidebarItem iconName='buildings' itemLabel='General'></SidebarItem>
                    <SidebarItem iconName='githubIcon' itemLabel='Github'></SidebarItem>
                    <SidebarItem iconName='folders' itemLabel='Groups'></SidebarItem>
                    <SidebarItem iconName='users' itemLabel='Users'></SidebarItem>
                    <SidebarItem iconName='webhook' itemLabel='Webhook' chip={{severity:'purple',chipLabel:'Beta'}}></SidebarItem>
                </div>
            </div>
            <div>
                <p>ok</p>
            </div>
        </div>
    )
}

export default Sidebar;