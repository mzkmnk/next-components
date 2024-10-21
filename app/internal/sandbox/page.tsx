import Image from "next/image";

const Page = () => {
    return (
        <div className="flex items-center justify-center min-w-[70rem] min-h-[40rem] rounded-xl border border-slate-500">
            <Image className="rounded-full border-dashed border-2 border-teal-500 object-fit aspect-square h-52 w-52" width={150} height={150} src="/assets/images/service-circle-icon.png" alt="icon"></Image>
        </div>
    )
}

export default Page;