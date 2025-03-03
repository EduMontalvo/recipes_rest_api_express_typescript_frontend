import { Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <>
            <div className="w-full h-full absolute">
                {/* <img src="https://i.imgur.com/YFO7YKO.jpeg" alt="topbanner" className="w-full h-full object-cover" /> */}
            </div>
            <Outlet />
        </>
    )
}
