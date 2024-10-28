import {TRepositoryResponse} from "@/api/dashboard/repository-details/[repositoryName]/route";
import {ClientRepositoryDetail} from "@/(internal)/dashboard/repositories/[repositoryName]/ClientRepositoryDetail";
import {headers} from "next/headers";

const Page = async ({params}:{params:Promise<{repositoryName:string}>}) => {

    const { repositoryName } = await params;

    const headersData = await headers();
    const host = headersData.get('host');
    const protocol = headersData.get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https';

    const response = await fetch(`${protocol}://${host}/api/dashboard/repository-details/${repositoryName}`);

    const {brunches}:TRepositoryResponse = await response.json();

    return (
        <ClientRepositoryDetail  brunches={brunches}></ClientRepositoryDetail>
    )
};

export default Page;
