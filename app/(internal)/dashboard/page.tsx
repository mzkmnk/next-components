import { Suspense } from "react";
import { ServerContributions } from "./components/ServerContributions";

export const experimental_ppr = true; //PPR使用

const Page = () => {

    return (
        <div className="w-full h-full flex items-center justify-center">
            <Suspense fallback={<div>loading...</div>}>
            <ServerContributions></ServerContributions>
            </Suspense>
        </div>
    )
};

export default Page;