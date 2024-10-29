import {TRepositoryResponse} from "@/api/dashboard/repository-details/[repositoryName]/route";
import {ClientRepositoryDetail} from "@/(internal)/dashboard/repositories/[repositoryName]/ClientRepositoryDetail";
import {getOrigin} from "@/lib/getOrigin";

const Page = async ({params}:{params:Promise<{repositoryName:string}>}) => {

    const { repositoryName } = await params;

    const { origin } = await getOrigin()

    const response = await fetch(`${origin}/api/dashboard/repository-details/${repositoryName}`);

    const {brunches}:TRepositoryResponse = await response.json();

    return (
        <ClientRepositoryDetail  brunches={brunches}></ClientRepositoryDetail>
    )
};

export default Page;
