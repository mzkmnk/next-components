import {TRepositoryResponse} from "@/api/dashboard/repository-details/[repositoryName]/route";
import {ClientRepositoryDetail} from "@/(internal)/dashboard/repositories/[repositoryName]/ClientRepositoryDetail";

const Page = async ({params}:{params:Promise<{repositoryName:string}>}) => {

    const { repositoryName } = await params;

    const response = await fetch(`${process.env.API_PREFIX}/api/dashboard/repository-details/${repositoryName}`);

    const {brunches}:TRepositoryResponse = await response.json();

    return (
        <ClientRepositoryDetail  brunches={brunches}></ClientRepositoryDetail>
    )
};

export default Page;
