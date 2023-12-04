import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [user, setUser] = useState(null);

    return (
        <div>
            <nav className="flex items-center justify-between p-4 w-full absolute z-50">
                <Link to={"/"}>
                    <h1 className="text-red-600 text-4xl font-extrabold cursor-pointer">NETFLIX</h1>
                </Link>
                {
                    user ? (
                        <div className="flex items-center gap-5">
                            <button className="border border-gray-300 text-white rounded cursor-pointer px-6 py-2">
                                Welcome, {'johndoe@test.com'}
                            </button>
                            <button className="bg-red-600 text-white rounded cursor-pointer px-6 py-2">Sign Out</button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-5">
                            <Link to={'/login'}>
                                <button className="border border-gray-300 text-white rounded cursor-pointer px-6 py-2">Sign in</button>
                            </Link>
                            <Link to={'/signup'}>
                                <button className="bg-red-600 text-white rounded cursor-pointer px-6 py-2">Sign up</button>
                            </Link>
                        </div>
                    )
                }

            </nav>
        </div>
    )
}
export default Navbar;
