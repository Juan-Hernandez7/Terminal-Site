import Nav from './Navbar';
import Bigsby from './media/project_pics/car.png';
import GatorTrade from './media/project_pics/GatorTradeHome.png';
import TankMain from './media/project_pics/TankMain.png';
import ClamJam from './media/project_pics/ClamJamHome.png';
import Doc from './media/icons/terminal-doc.png';

function Projects(){
    return(
        <div className = "outer-container">
            <div className = "inner-container">
                <Nav/>

                <div className = "flex title-card">
                    <img className = "icon ml-2" src = {Doc} alt = "Document Icon"></img>
                    <h1 className = "mr-2">Projects</h1>
                </div>

                <div className = "content-box grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
                        <div className = "project-card">
                            <a href = "/Projects/Autonomous-Car">
                                <img className = "card-img" src = {Bigsby} alt = "Omnidirectional car"></img>
                                <h4>B.I.G.S.B.Y: </h4>
                                <p>Autonomous Car</p>
                            </a>                    
                        </div>

                        <div className = "project-card">
                            <a href = "/Projects/Clam-Jam">
                                <img  className = " card-img" src = {ClamJam} alt = "Music app"></img>
                                <h4 className>Clam Jam:</h4>
                                <p>Music Visualizer Web App</p>
                            </a>                    
                        </div>
                    
                        <div className = "project-card">
                            <a href = "/Projects/Gator-Trade">
                                <img className = "card-img"src = {GatorTrade} alt = "e-commerce app"></img>
                                <h4>GatorTade:</h4>
                                <p>E-commerce Web App</p>
                            </a>                    
                        </div>

                        <div className = "project-card">
                            <a href = "/Projects/Tank-Game">
                                <img className = "card-img" src = {TankMain} alt ="Theft in action" ></img>
                                <h4>Tank Game:</h4>
                                <p>PvE Tank Fighting Game</p>
                            </a>                    
                        </div>
                    </div>
                

            </div>
            
        </div>
    );
}

export default Projects;