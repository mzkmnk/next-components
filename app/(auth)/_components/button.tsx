import { auth, signIn } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";


const Button = async () => {

    const session = await auth();

    console.log(session);

    return (
        <>
            <form
                action={async () => {
                    "use server"
                    await signIn();
                }}
            >
                <button className={cn("rounded-full w-20 h-20 flex items-center bg-slate-900 justify-center duration-150 shadow")}>
                    <Github size={40} strokeWidth={1.2} color="white" />
                </button>
            </form>
        </>
    )
};

export default Button;