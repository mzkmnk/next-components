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

export async function GET(_req:NextRequest,{params}:{params:Promise<{username:string}>}) {

    const {username} = await params;

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
        username,
    });

    const contributions:TContributionsResponse[] = response.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) => week.contributionDays
    );

    return NextResponse.json<{contributions:TContributionsResponse[]}>({
        contributions,
    })
}