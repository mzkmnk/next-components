const General = () => {

    const array:number[] = Array(1000).fill(0).map((_v,i) => i);

    console.log(array);

    return(
        <div className="flex items-center h-full flex-col">
            <h1>Hello General</h1>
            {
                array.map((v) => (<p key={v}>{v}</p>))
            }
        </div>
    )
};

export default General;