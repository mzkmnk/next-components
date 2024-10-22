import { Suspense } from "react";
import { ServerContributions } from "./components/ServerContributions";
import { Skeleton } from "./components/skeleton";

export const experimental_ppr = true; //PPR使用

const Page = () => {

    return (
        <div className="w-full h-full flex items-center justify-center">
            <Suspense fallback={Skeleton({className:'w-[40rem] h-[25rem]'})}>
            <ServerContributions></ServerContributions>
            </Suspense>
        </div>
    )
};

export default Page;