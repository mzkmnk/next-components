import Chip from "../../_components/chip/chip";

const Page = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-xl border p-3 flex flex-row gap-4">
                <Chip>primary</Chip>
                <Chip variant={"warning"}>warining</Chip>
                <Chip variant={"secondary"}>secondary</Chip>
                <Chip variant={"danger"}>danger</Chip>
            </div>
        </div>
    )
}

export default Page;