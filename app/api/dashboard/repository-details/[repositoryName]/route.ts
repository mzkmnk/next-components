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
        refs:{
            nodes:{
                name:string,
                target:{
                    history:{
                        totalCount:number,
                        nodes:TCommitResponse[],
                    }
                }
            }[]
        }
        pullRequests:{
            nodes:TPullRequestResponse[],
        }|null
    }
}

export type TBrunchResponse = {
    name:string,
    commits:TCommitResponse[],
}

export type TRepositoryResponse = {
    pullRequests:TPullRequestResponse[],
    brunches:TBrunchResponse[]
}

export const GET =  async (_req:NextRequest,{params}:{params:Promise<{repositoryName:string}>}) => {
    const octokit = new Octokit({
        auth:process.env.GITHUB_TOKEN
    });

    const { repositoryName } = await params;

    const commitQuery = `
    query($repositoryName:String!){
    repository(owner:"mzkmnk",name: $repositoryName){
    refs(refPrefix:"refs/heads/",first:100){
      nodes{
        name
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
                  ...on PullRequest{
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
      pullRequests(first:20){
        nodes{
          url
          title
          merged
        }
      }
      }
    }
    `

    const response = await octokit.graphql<TCommitQueryResponse>(commitQuery,{
        repositoryName,
    });

    return NextResponse.json<TRepositoryResponse>({
        pullRequests:response.repository.pullRequests?.nodes ?? [],
        brunches: response.repository.refs.nodes.flatMap((brunches) => {
                return {
                    name:brunches.name,
                    commits:brunches.target.history.nodes
                }
            })
    })
}
