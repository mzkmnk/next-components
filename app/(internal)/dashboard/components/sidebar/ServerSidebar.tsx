import { useRepos } from "../../hooks/useRepos"
import { ClientSidebar } from "./ClientSidebar"

export const ServerSidebar = async () => {

    const { repos } = await useRepos();

    return (
        <>
            <ClientSidebar repos={repos}></ClientSidebar>
        </>
    )
}