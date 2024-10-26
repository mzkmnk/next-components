const Page = async ({params}:{params:Promise<{repositoryName:string}>}) => {

    const{ repositoryName } = await params;

    return (
        <div>{repositoryName}</div>
    )
};

export default Page;