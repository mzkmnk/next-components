import Chip from "../../_components/chip/chip";

const Page = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-xl border border-slate-400 p-3 flex flex-row items-center gap-4 min-h-80 min-w-56">
                <Chip>primary</Chip>
                <Chip variant={"warning"}>warining</Chip>
                <Chip variant={"secondary"}>secondary</Chip>
                <Chip variant={"danger"}>danger</Chip>
            </div>
        </div>
    )
}

export default Page;