import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        
        <main>
            <div className='Banner'>
                <img src={`../images/banner.png`} alt='farmflowers' loading='lazy' />
            </div>
            <div className='introtext'>
                <h2>
                Welkom bij The Farmflowerscollection
                </h2>
                <p>Welkom op de site van "The FarmFlowers Collection", hier vind u de door de jaren heen verzamelde autocollectie. In verband met andere activiteiten hebben we besloten de collectie auto's wat terug te brengen. 
                    Neem een kijkje door onze unieke collectie.</p>
                <h3>Huidige collectie</h3>
                <p>Onze bedrijfsactiviteiten zijn vanaf de beginjaren na de tweede wereldoorlog, tot heden ten dagen, het telen van bloembollen geweest.In de zeventiger jaren zijn wij begonnen met het verzamelen van klassieke auto's, deze verzameling is flink gegroeid, na onze eerste auto, een Ford Capri, kwam al snel de liefde voor de “Amerikanen”, desondanks hebben wij hiernaast ook merken als Porsche, Lancia en MG.</p>
            <button className='showroomButton'><Link to="/Showroom">Showroom</Link></button>
            <button className='showroomButton'><Link to="/Contact">Contact</Link></button>
            </div>
        </main>
       
          
    )
}

export default Home