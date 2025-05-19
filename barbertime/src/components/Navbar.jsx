
function Navbar(){

    return(
        <>
            <header>
                <div className="bg-gray-600 font-BebasNeue">
                    <nav className="flex justify-between p-5 text-2xl">
                        <div>
                            <h1 className="text-4xl">
                                <a href="#">Barber Time</a>
                            </h1>
                        </div>
                        <div>
                            <ul className="flex gap-5 pr-8">
                                <li>
                                    <a href="#">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Barbearias</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Agendas</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Login</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Navbar;