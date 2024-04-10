import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const mailLink = () => {
        const email = 'farmflowers@live.nl';
        const mailtoLink = `mailto:${email}`;
       
        window.open(mailtoLink, '_blank');
      };

    return (
        <main>
            <div className='Banner'>
                <img src={`../images/banner.png`} alt='farmflowers' loading='lazy' />
            </div>
            <div className='introtext contact'>
                <h2>
                Contact
                </h2>
                <p>Maak een afspraak om de collectie te bekijken of stel andere vragen.</p>
                <a onClick={mailLink}><FontAwesomeIcon icon={faEnvelope} /> farmflowers@live.nl</a>
                <p><FontAwesomeIcon icon={faPhone} /> 0620422388</p>
                <p><FontAwesomeIcon icon={faHome} /> Middenvliet 11</p>

            </div>
        </main>
        
    )
}


export default Contact