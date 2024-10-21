import { ClientContributions } from "./ClientContributions";
import { useContributions } from "../hooks/useContributions";
import { Suspense } from "react";

export const ServerContributions = async () => {

    const {contributions,contributionsCnt} = await useContributions();

    return (
        <Suspense fallback={<div>loading...</div>}>
            <ClientContributions contributions={contributions} contributionsCnt={contributionsCnt} ></ClientContributions>
        </Suspense>
    )
};