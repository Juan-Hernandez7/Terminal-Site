import Nav from './Navbar';
import Nuke from './media/icons/mini_nuke.png';
import TankMain from  './media/project_pics/TankMain.png'
import Gameplay from './media/project_pics/Gameplay.png';

function TankGame(){

    return(
        <div className = "outer-container">
            <div className = "inner-container">
                <Nav/>

                <div className = " my-10 flex justify-center">
                        <img alt = "Start Menu" src = {TankMain}></img>
                </div>

                <div className = "text-2xl text-center">
                    <p>
                        Tank Game: PvE Tank fighting game
                    </p>    
                </div>

                <div className = "title-card flex">

                    <img className= "icon object-scale-down" alt = "Small Bomb" src = {Nuke}></img>
                    <h1 className = "ml-1">Description:</h1>
                </div>
                <div className = "pr-12 mt-5">
                    <p>
                        A game where you control a tank and have to destroy the enemy tanks. 
                        Complete with powerups and tanks with varied AI. 
                    </p>
                </div>

                <div className = "mt-10 px-10 text-center">
                    <p >
                        Tech Used: Java, Maven 
                    </p>

                    <p>
                        Source code: Available upon request. 
                    </p>
                </div>

                <div className = " my-10 flex justify-center">
                        <img alt = "Gameplay" src = {Gameplay}></img>
                </div>

            </div>
        </div>
    );

}

export default TankGame;