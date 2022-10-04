import Nav from './Navbar';
import Radio from './media/icons/radio.png';

function Contact(){
    return(
        <div className="outer-container">
            <div className = "inner-container">
                <Nav/>
                <div className = "flex title-card my-5">
                    <img className = "icon" alt = "radio" src = {Radio}></img>
                    <h1> Contact Information </h1>
                </div>

                <div className = " text-center text-lg justify-start hover:text-red-500">
                    <a  href = "https://github.com/Juan-Hernandez7">Github: Juan-Hernandez7</a>
                </div>

                <div className = " text-center text-lg justify-start hover:text-red-500">
                    <a href="mailto:Juan-Hernandez42@protonmail.com">Email: Juan-Hernandez42@protonmail.com </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;