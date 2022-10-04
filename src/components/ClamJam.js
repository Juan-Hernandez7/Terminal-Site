import Nav from './Navbar';
import Shucky from './media/icons/shucky.png';
import ClamHome from './media/project_pics/ClamJamHome.png';
import Piano from './media/project_pics/Piano.png';
import Harmonica from './media/project_pics/Harmonica.png';

function ClamJam(){

    return(
        <div className = "outer-container">
            <div className = "inner-container">
                <Nav/>

                <div className = "my-10">
                    <img alt="Clam Jam Homepage" src = {ClamHome}></img>
                </div>
                <div className = "text-2xl text-center ">
                    <p>
                        ClamJam: Music Visualizer Web App
                    </p>    
                </div>

                <div className = "title-card flex">
                    <img className = "icon" alt = "a dandy clam" src = {Shucky}></img>
                    <h1 >Description:</h1>
                </div>
                <div className = "pr-12 mt-5">
                    <p>
                        Clam Jam is an application where you can play with various instruments
                        and waveform visualisers. Additionally the playlist feature allows you
                        to listen to and compose your own songs. 
                    </p>
                </div>

                <div className = "mt-10 px-10 text-center">
                    <p >
                        Tech Used: React, Typescript, Three.JS, SQLite3
                    </p>

                    <p>
                        Source code: Available upon request. 
                    </p>

                    <div className = "my-10 justify-center">
                        <img alt = "Piano Demo" src = {Piano}></img>
                    </div>

                    <div className = "my-10 justify-center">
                        <img alt = "Harmonica Demo" src = {Harmonica}></img>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default ClamJam;