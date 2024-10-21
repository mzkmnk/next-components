import { TContributionsResponse } from "@/api/dashboard/[username]/route";
import { format,parse } from "date-fns";
import { useSession } from "next-auth/react";

export const useContributions = () => {
    const getContributions = async (username:string) => {
        const response = await fetch(`/api/dashboard/${username}`);
        const data:{contributions:TContributionsResponse[]} = await response.json();
        data.contributions.map((contribution) => {
            contribution.date = format(parse(contribution.date,'yyyy-MM-dd',new Date()),"yyyy-MM-dd'T'HH:mm:ss")
            return contribution;
        })
        return data;
    }

    return {
        getContributions
    }
}