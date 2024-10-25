import { ClientContributions } from "./ClientContributions";
import { useContributions } from "../../hooks/useContributions";

export const ServerContributions = async () => {

    const {contributions,contributionsCnt} = await useContributions();

    return (
        <>
            <ClientContributions contributions={contributions} contributionsCnt={contributionsCnt} ></ClientContributions>
        </>
    )
};