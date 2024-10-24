import { Octokit } from "@octokit/core";
import { format, sub } from "date-fns";
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
    query contributions($username:String!,$to:DateTime!,$from:DateTime!) {
        user(login: $username){
            contributionsCollection(to: $to,from: $from){
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
        username:username,
        to:new Date(),
        from:sub(new Date(),{years:1}),
    });

    const contributions:TContributionsResponse[] = response.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) => week.contributionDays
    );

    return NextResponse.json<{contributions:TContributionsResponse[]}>({
        contributions,
    })
}