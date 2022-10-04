
function Navbar(){
    return(
        <nav className = "text-white font-monofonto text-xl bg-black sticky top-0 z-50">
            <div className = "text-terminal my-5">
                <h2 className= "ml-5">Welcome to ROBCO Industries (TM) Termlink</h2>
                <h2 className = "ml-5">VAULT-TEC RECREATION TERMINAL</h2>
            </div>

            <ul className = "md:col-span-1 md:flex  justify-center" id = "menu">
                <li className = "tab">
                    <a href = "/">
                        <span>Home</span>
                    </a>
                </li>

                <li className = "tab">
                    <a href = "/Projects">
                        <span>Projects</span>
                    </a>
                </li>

                <li className = "tab">
                    <a href = "/Contact">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;