import React from "react";

export default function InternalLayout({children}:Readonly<{children:React.ReactNode}>){

    return(
        <body>
            {children}
        </body>
    )
}