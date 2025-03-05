import { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
    return (
        <>
            <div className="bg-red-100 border border-red-400 text-center text-red-700 px-3 py-2 rounded relative" role="alert">
                <span className="block sm:inline">{children}</span>
            </div>
        </>
    )
}
