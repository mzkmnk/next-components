import {TReposResponse} from "@/api/dashboard/repos/route";
import {getOrigin} from "@/lib/getOrigin";

export const fetchRepos = async ():Promise<{'repos':TReposResponse}> => {

    const { origin } = await getOrigin();

    const response = await fetch(`${origin}/api/dashboard/repos`,{
        method:'POST',
    });

    const data:{repos:TReposResponse} = await response.json();

    return {
        'repos':data.repos,
    }
};
