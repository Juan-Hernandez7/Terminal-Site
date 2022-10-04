import Nav from './Navbar';
import Cap from './media/icons/nuka_cap.png';
import Post from './media/project_pics/Post_Demo.png';
import GatorHome from './media/project_pics/GatorTradeHome.png';
import Msg from './media/project_pics/message.png';
import Settings from './media/project_pics/settings.png'; 

function GatorTrade(){

    return(
        <div className = "outer-container">
            <div className = "inner-container">
                <Nav/>

                <div className = "my-10">
                    <img alt="Gatortrade Homepage" src = {GatorHome}></img>
                </div>

                <div className = "text-2xl text-center">
                    <p>
                        GatorTrade: E-commerce Web Application
                    </p>    
                </div>

                <div className = "title-card flex">
                    <img className = "icon" alt = "bottle cap" src = {Cap}></img>
                    <h1 className = "ml-1">Description:</h1>
                </div>
                <div className = "pr-12 mt-5">
                    <p>
                        Gator Trade is an online marketplace for SF state students and staff to
                        buy, and sell their items. Users must register with an SFSU email to provide its users 
                        a sense of security when using the application.              
                    </p>
                </div>

                <div className = "mt-10 px-10 text-center">
                    <p >
                        Tech Used: Express, Javascript, Bootstrap,  SQL, AWS, Github
                    </p>

                    <p>
                        Source code: Available upon request. 
                    </p>

                    <div className = "my-10 justify-center">
                        <img alt = "Post Demo" src = {Post}></img>
                    </div>

                    <div className = "my-10 justify-center">
                        <img alt = "Message Demo" src = {Msg}></img>
                    </div>

                    <div className = "my-10 justify-center">
                        <img alt = "User Settings" src = {Settings}></img>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default GatorTrade;