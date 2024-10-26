import { TReposResponse } from "@/api/dashboard/repos/route";

export const useRepos = async ():Promise<{'repos':TReposResponse}> => {
    const response = await fetch(`${process.env.API_PREFIX}/api/dashboard/repos`,{
        method:'POST',
    });

    const data:{repos:TReposResponse} = await response.json();

    return {
        'repos':data.repos,
    }
};