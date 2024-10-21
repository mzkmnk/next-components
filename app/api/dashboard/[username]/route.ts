import { Octokit } from "@octokit/core";
import { NextRequest, NextResponse } from "next/server";

export type TContributionsQueryResponse = {
    user:{
        contributionsCollection:{
            contributionCalendar:{
                weeks:{
                    contributionDays:TContributionsResponse[]
                }[]
            }
        }
    }
};

export type TContributionsResponse = {
    date:string,
    contributionCount:number
}

export async function POST(_req:NextRequest,context:{params:{username:string}}) {
    // if(username === undefined){
    //     return new NextResponse("username is required",{status:400})
    // }

    const octokit = new Octokit({
        auth:process.env.GITHUB_TOKEN
    })

    const contributionsQuery = `
    query contributions($username:String!) {
        user(login: $username){
            contributionsCollection(to:"2024-10-20T00:00:00",from:"2024-01-01T00:00:00"){
                contributionCalendar{
                    weeks{
                        contributionDays{
                            date
                            contributionCount
                        }
                    }
                }
            }
        }
    }
    `;

    const response = await octokit.graphql<TContributionsQueryResponse>(contributionsQuery,{
        username:context.params.username
    });

    const contributions:TContributionsResponse[] = response.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) => week.contributionDays
    );

    return NextResponse.json<{contributions:TContributionsResponse[]}>({
        contributions,
    })
}