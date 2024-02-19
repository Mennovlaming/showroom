import './Contact.css';
import MailButton from "../../components//MailButton/MailButton"

const Contact = () => {
    return (
        <div className='Contact'>
            <div className='contactText'>
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>+31(0)12345679</p>
                <p>+31(0)223123456</p>
            </div>
        <MailButton />
        </div>
    )
}


export default Contact