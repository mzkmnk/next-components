import { ClientSidebar } from "./ClientSidebar"

export const ServerSidebar = async () => {

    const repositories = await fetch('')

    return (
        <ClientSidebar></ClientSidebar>
    )
}