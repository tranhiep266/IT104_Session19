import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded mx-2 ${isActive ? "bg-red-500 text-white" : "hover:underline"}`;

export default function Nav() {
    return (
        <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
            <NavLink to="/homeEx6" end className={linkClass}>
                Home
            </NavLink>
            <NavLink to="/product" className={linkClass}>
                Product
            </NavLink>
            <NavLink to="/detail" className={linkClass}>
                Detail
            </NavLink>
        </nav>
    );
}