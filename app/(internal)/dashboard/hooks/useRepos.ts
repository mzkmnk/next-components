import {TReposResponse} from "@/api/dashboard/repos/route";
import {headers} from "next/headers";

export const fetchRepos = async ():Promise<{'repos':TReposResponse}> => {

    const headersData = await headers();
    const host = headersData.get('host');
    const protocol = headersData.get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https';

    console.dir(headersData,{depth:null});

    const response = await fetch(`${protocol}://${host}/api/dashboard/repos`,{
        method:'POST',
    });

    const data:{repos:TReposResponse} = await response.json();

    return {
        'repos':data.repos,
    }
};
