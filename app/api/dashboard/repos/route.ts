import {Octokit} from "@octokit/core"
import {NextResponse} from "next/server"

export type TReposResponse = {
    totalCount:number,
    nodes:{
        name:string,
        description:string|null,
        url:string,
        createdAt:string,
        updatedAt:string,
    }[]
};

export type TReposQueryResponse = {
    user:{
        repositories:TReposResponse
    }
}

export const POST = async () => {
    const octokit = new Octokit({
        auth:process.env.GITHUB_TOKEN
    })

    const reposQuery = `
        query($username:String!){
            user(login: $username){
                repositories(last:20){
                    totalCount
                    nodes{
                        name
                        description
                        url
                        createdAt
                        updatedAt
                    }
                }
            }
        }
    `

    const queryResponse = await octokit.graphql<TReposQueryResponse>(reposQuery,{
        username:'mzkmnk',
    })

    return NextResponse.json<{repos:TReposResponse}>({
        repos:queryResponse.user.repositories,
    })
}
