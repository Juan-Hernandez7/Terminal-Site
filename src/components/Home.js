import Nav from "./Navbar";
import vault from "./media/icons/vault-icon.png";
import Holotape from './media/icons/holotape.png';
function Home(){
    return(
        <div className = "outer-container">
            <div className = "inner-container">
                <Nav/>

                <div className="flex title-card">
                    <img  className = "icon" src = {vault} alt="vault-icon"></img>
                    <h1 >Meet</h1>
                </div>

                <div className = " flex mt-5 justify-center text-xl">
                    <p>Juan Hernandez</p>
                </div>
                <div className = "flex justify-center">
                    <p>(Developer, Handyman, Writer)</p>
                </div>

                <div>

                    <p>
                        "Hey there folks, Juan here. Life's been pretty simple since graduating in the spring so there's not much to say.
                        I go outside occasionally to ease the sense of dread and prevent myself from going stir crazy. There is more to life than sitting in front
                        of a monitor all day after all. That being said most days I'm bound to my chair with my time split between 
                        learning about miscellaneous topics like Networks, Security, and IT and building my skillset so I can one day
                        leave my mother's basement."
                        <br></br> <br></br>
                        Likes: Tending to Plants, Writing Short Stories, Cooking
                        <br></br> <br></br>
                        Dislikes: Boiled Carrots, Bell Peppers in sweet glaze
                        
                    </p>

                </div>


                <div className="flex title-card">
                    <img  className = "icon" src = {vault} alt="vault-icon"></img>
                    <h1 >About</h1>
                </div>
                <div className = "mt-5">
                    <p >
                        Vault-Tec is commited to the research and developement of next generation
                        technologies for personal projects and business applications. While the rest
                        of the world focuses on the looming threat of nuclear war we choose to focus on
                        acquiring employment to afford modern luxuries such as single person housing and food. 
                    </p>
                </div>

                <div className="flex title-card">
                    <img  className = "icon" src = {Holotape} alt="vault-icon"></img>
                    <h1 >Tech</h1>
                </div>

                <div className="mt-5">
                    <p >
                        Some of the tools and tech I've used are:

                    </p>
                    
                    <ul className = "list-disc list-inside mt-2">
                        <li>Java, Javascript/Typescript, C/C++, Python, SQL,HTML, CSS</li>
                        <li>React, MongoDB, Tailwind</li>
                        <li>AWS, Github, Linux </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Home;