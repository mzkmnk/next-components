import {TContributionsResponse} from "@/api/dashboard/contributions/[username]/route";
import {differenceInDays, format, parse, parseISO, sub} from "date-fns";
import {headers} from "next/headers";

export type TContributions = {
    [diff in string]:{
        contributionCount: number;
        date:string;
    }
}


export const fetchContributions = async () => {
    const getContributions = async ({username}:{username:string}) => {

        // testで5000ms遅くする
        // await new Promise((resolve) => setTimeout(resolve, 5000));

        const headersData = await headers();
        const host = headersData.get('host');
        const protocol = headersData.get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https';

        const response = await fetch(`${protocol}://${host}/api/dashboard/contributions/${username}`);
        const data:{contributions:TContributionsResponse[]} = await response.json();
        data.contributions.map((contribution) => {
            contribution.date = format(parse(contribution.date,'yyyy-MM-dd',new Date()),"yyyy-MM-dd'T'HH:mm:ss")
            return contribution;
        })
        return data;
    }

    const data = await getContributions({username:'mzkmnk',});

    const contributions : TContributions = {};

    let contributionsCnt:number = 0;


    data.contributions.map((contribution) => {
        contributions[differenceInDays(parseISO(contribution.date) ,sub(new Date(),{years:1}))] = {
            contributionCount:contribution.contributionCount,
            date:contribution.date,
        };
        contributionsCnt += contribution.contributionCount;
    })

    return {
        contributions,
        contributionsCnt
    }
}
