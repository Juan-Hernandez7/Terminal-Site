import Nav from './Navbar';
import Eyebot from './media/icons/eyebot.png';
import Bigsby from './media/project_pics/car1.png';
import Side from './media/project_pics/car_side.png';

function AutoCar(){

    return(
        <div className = "outer-container">
            <div className = "inner-container">
                <Nav/>
                
                <div className = " my-10 justify-center">
                        <img alt = "B.I.G.S.B.Y" src = {Bigsby}></img>
                </div>

                <div className = "text-2xl text-center">
                    <p>
                        B.I.G.S.B.Y: Autonomous Car Project
                    </p>    
                </div>

                <div className = "title-card flex">
                    <img className = "icon" alt = "eye bot" src={Eyebot}></img>
                    <h1 className = "ml-1">Description:</h1>
                </div>

                <div className = "pr-12 mt-5">
                    <p>
                        B.I.G.S.B.Y is an autonomoous vehicle capable of navigating
                        a track and strafing around obstacles. It accomplishes this
                        by using 2 sets of infared sensors. One set helps decide how the car
                        turns to remain on track. The other to detect obstacles and check if the
                        object has been cleared before navigating back onto the track.

                    </p>

                    <div className = "mt-10 px-10 text-center">
                        <p >
                            Tech Used: C, Raspberry PI, IR sensors, Motor HAT
                        </p>

                        <p>
                            Source code: Available upon request. 
                        </p>

                        <a className = "hover:text-red-500 text-xl" href = "https://youtu.be/lDm0MyLUJe4">
                          View Demo Video! 
                        </a>
                    </div>
                </div>

                <div className = " my-10 justify-center">
                        <img alt = "Side Profile" src = {Side}></img>
                </div>

            </div>
        </div>
    );

}

export default AutoCar;