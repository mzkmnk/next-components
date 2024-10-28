import {ClientContributions} from "./ClientContributions";
import {fetchContributions} from "@/(internal)/dashboard/hooks/useContributions";

export const ServerContributions = async () => {

    const {contributions,contributionsCnt} = await fetchContributions();

    return (
        <>
            <ClientContributions contributions={contributions} contributionsCnt={contributionsCnt} ></ClientContributions>
        </>
    )
};
