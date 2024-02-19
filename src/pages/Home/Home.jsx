import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <main>
            <div className='imageLeft'>
                <div className='text'>
                    <h2>Welkom bij mijn collectie</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <img src={'../images/home1.jpg'} alt={'home image'} loading='lazy' />
            </div>
            <div className='imageRight'>
            <img src={'../images/home2.jpg'} alt={'home image'} loading='lazy' />
                <div className='text'>
                    <h2 className='collection'>Welkom bij mijn collectie</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button className='showroomButton'><Link to="/Showroom">Showroom</Link></button>
                </div>
            </div>
        </main>
       
            </>
    )
}


export default Home