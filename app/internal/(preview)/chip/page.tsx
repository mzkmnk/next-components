import Chip from "../../_components/chip/chip";

const Page = () => {
    return (
            <div className="flex items-center justify-center gap-4 border rounded-xl min-w-[50rem] min-h-80 border-slate-400">
                <Chip>primary</Chip>
                <Chip variant={"warning"}>warining</Chip>
                <Chip variant={"secondary"}>secondary</Chip>
                <Chip variant={"danger"}>danger</Chip>
            </div>
    )
}

export default Page;