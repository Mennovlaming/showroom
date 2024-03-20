import './Over.css';
import { Link } from 'react-router-dom'

const Over = () => {
    return (
        <main>
        <div className='Banner'>
            <img src={`../images/banner.png`} alt='farmflowers' loading='lazy' />
        </div>
        <div className='introtext'>
            <h2>
            The FarmFlowers Collection
            </h2>
            <p>Welkom op de site van "The FarmFlowers Collection"
Onze bedrijfsactiviteiten zijn vanaf de beginjaren na de tweede wereldoorlog, tot heden ten dagen, het telen van bloembollen geweest.&nbsp;&nbsp;  <br />
&nbsp;In de zeventiger jaren zijn wij begonnen met het verzamelen van klassieke auto's. <br /><br />
Onze eerste auto was destijds een Ford Capri en al snel kwam de liefde voor "Amerikanen" naar boven met de aanschaf van een Chevrolet Monte Carlo. <br />
In de loop der jaren is onze collectie flink gegroeid (wij zijn tenslotte geboren "growers") en hoewel wij nog steeds flink wat "Amerikanen" hebben staan, vind u bij ons ook merken als Porsche, Lancia en MG. <br /> <br />
Wij zijn nu aangekomen op een punt waar wij onze activiteiten hebben verlegd naar opslag van o.a strandhuisjes voor derden en hebben daarom besloten de teelt van bloembollen te minimaliseren en onze collectie klassieke auto's terug te gaan brengen. <br /><br />
U bent welkom om onze collectie te bezichtigen, maar uitsluitend op afspraak, neem hiervoor contact met ons op.</p>
<button className='showroomButton'><Link to="/Contact">Contact</Link></button>
            
        </div>
    </main>
    )
}


export default Over


{/* <p>
Welkom op de site van "The FarmFlowers Collection"

Onze bedrijfsactiviteiten zijn vanaf de beginjaren na de tweede wereldoorlog, tot heden ten dagen, het telen van bloembollen geweest.

In de zeventiger jaren zijn wij begonnen met het verzamelen van klassieke auto's.

Onze eerste auto was destijds een Ford Capri en al snel kwam de liefde voor "Amerikanen" naar boven met de aanschaf van een Chevrolet Monte Carlo.

In de loop der jaren is onze collectie flink gegroeid (wij zijn tenslotte geboren "growers") en hoewel wij nog steeds flink wat "Amerikanen" hebben staan, vind u bij ons ook merken als Porsche, Lancia en MG.

Wij zijn nu aangekomen op een punt waar wij onze activiteiten hebben verlegd naar opslag van o.a strandhuisjes voor derden en hebben daarom besloten de teelt van bloembollen te minimaliseren en onze collectie klassieke auto's terug te gaan brengen.

U bent welkom om onze collectie te bezichtigen, maar uitsluitend op afspraak.
</p> */}