
const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-black text-white p-5 bg-opacity-10 z-10">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="logo-container">
                    Logo
                </div>
                <div className="flex items-center justify-between gap-3">
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