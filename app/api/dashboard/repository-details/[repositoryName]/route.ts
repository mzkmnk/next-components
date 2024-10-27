import {Octokit} from "@octokit/core";
import {NextRequest, NextResponse} from "next/server";

export type TCommitResponse = {
    messageHeadline:string,
    url:string,
    committedDate:string,
    author:{
        avatarUrl:string,
        user:{
            url:string,
            login:string,
        }
    }
    associatedPullRequests:{
        nodes:{
            url:string,
            author:{
                login:string
                avatarUrl:string
            }
        }[]
    },
}

export type TPullRequestResponse = {
    url:string,
    title:string,
    merged:boolean,
}

export type TCommitQueryResponse = {
    repository:{
        pullRequests:{
            nodes:TPullRequestResponse[],
        }|null
        ref:{
            target:{
                history:{
                    totalCount:number,
                    nodes:TCommitResponse[],
                }
            }
        }|null
    }
}

export type TRepositoryResponse = {
    commitsTotalCount:number,
    pullRequests:TPullRequestResponse[],
    commits:TCommitResponse[]
}

export const GET =  async (_req:NextRequest,{params}:{params:Promise<{repositoryName:string}>}) => {
    const octokit = new Octokit({
        auth:process.env.GITHUB_TOKEN
    });

    const { repositoryName } = await params;

    const commitQuery = `
    query($repositoryName:String!){
      repository(owner:"mzkmnk",name: $repositoryName){
        pullRequests(first:20){
          nodes{
            url
            title
            merged
          }
        }
        ref(qualifiedName:"main"){
          target{
            ... on Commit{
              history{
                  totalCount
                  nodes{
                    messageHeadline
                    url
                    committedDate
                    author{
                      avatarUrl
                      user {
                        url
                        login
                      }
                    }
                    associatedPullRequests(first:1){
                      nodes{
                      \t...on PullRequest{
                          url
                          author{
                            login
                            avatarUrl
                          }
                          
                        }
                      }
                    }
                  }
              }
            }
          }
        }
      }
    }
    `

    const response = await octokit.graphql<TCommitQueryResponse>(commitQuery,{
        repositoryName,
    });

    return NextResponse.json<TRepositoryResponse>({
        commitsTotalCount:response.repository.ref?.target.history.totalCount ?? 0,
        pullRequests:response.repository.pullRequests?.nodes ?? [],
        commits: response.repository.ref?.target.history.nodes ?? [],
        }
    )
}
