const General = () => {

    const array:number[] = Array(1000).fill(0).map((_v,i) => i);

    return(
        <div className="flex items-center h-full flex-col text-slate-600">
            <h3>Hello General</h3>
            {
                array.map((v) => (<p key={v}>{v}</p>))
            }
        </div>
    )
};

export default General;