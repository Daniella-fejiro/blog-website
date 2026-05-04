import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 md:px-10 h-16">
            
            <h1 className="text-xl md:text-2xl font-bold font-raleway text-blue-600">
            Dani's Blog
            </h1>

            <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
            >
            ☰
            </button>

            <nav className="hidden md:flex items-center gap-6 font-ubuntu">
            <NavLink to="/" className="text-gray-600 hover:text-blue-600 transition">
                Blog
            </NavLink>

            <NavLink to="/new-post" className="text-gray-600 hover:text-blue-600 transition">
                Create Blog
            </NavLink>

            <NavLink to="/login" className="text-gray-600 hover:text-blue-600 transition">
                Login
            </NavLink>

            <NavLink to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Sign Up
            </NavLink>
            </nav>
        </div>

        {open && (
            <div className="md:hidden flex flex-col gap-4 px-6 pb-6 font-ubuntu">
            <NavLink to="/" onClick={() => setOpen(false)} className="text-gray-600 hover:text-blue-600">
                Blog
            </NavLink>

            <NavLink to="/new-post" onClick={() => setOpen(false)} className="text-gray-600 hover:text-blue-600">
                Create Blog
            </NavLink>

            <NavLink to="/login" onClick={() => setOpen(false)} className="text-gray-600 hover:text-blue-600">
                Login
            </NavLink>

            <NavLink to="/signup" onClick={() => setOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                Sign Up
            </NavLink>
            </div>
        )}
        </header>
    );
}