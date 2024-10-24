import { Octokit } from "@octokit/core"

export type TReposQueryResponse = {

}

export const POST = async () => {
    const octokit = new Octokit({
        auth:process.env.GITHUB_TOKEN
    })

    const reposQuery = `
        query($username:String!){
            user(login:"mzkmnk"){
                name
                url
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

    const queryResponse = await octokit.graphql(reposQuery,{
        username:'mzkmnk',
    })

    console.log(queryResponse);
}