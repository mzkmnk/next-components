import {ClientSidebar} from "./ClientSidebar"
import {fetchRepos} from "@/(internal)/dashboard/hooks/useRepos";

export const ServerSidebar = async () => {

    const { repos } = await fetchRepos();

    return (
        <>
            <ClientSidebar repos={repos}></ClientSidebar>
        </>
    )
}
