import React from "react";
import { IconContext } from "react-icons";

export default function ConfigIcon({ children, size }: {children: React.ReactNode, size: string}) {

    return (
        <>
            <IconContext.Provider value={{ size }}>
                {children}
            </IconContext.Provider>
        </>
    );
}