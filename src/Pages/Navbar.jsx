import { useState } from "react";
import { RiMenu4Line } from 'react-icons/ri';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleOpen = () => {
        setShowMenu(!showMenu);
    }
    return (
        <nav className="fixed top-0 w-full bg-black text-white p-5 bg-opacity-10 z-10">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="logo-container">
                    Logo
                </div>
                <div className="hidden font-semibold md:flex items-center justify-between gap-3">
                    <p>Home</p>
                    <p>Colleges</p>
                    <p>Admission</p>
                    <p>My College</p>
                </div>
                <div className="md:hidden">
                    <p onClick={handleOpen} className="text-2xl"><RiMenu4Line /></p>
                </div>
                <div className={` fixed right-4 bg-black p-3 top-20 ${showMenu? 'opacity-100 transition ease-linear duration-1000': 'opacity-0'}`}>
                    <p>Home</p>
                    <p>Colleges</p>
                    <p>Admission</p>
                    <p>My College</p>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;