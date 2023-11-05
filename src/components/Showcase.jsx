import kitchen from '../images/kitchenconcrete.jpg'
import bedroom from '../images/bedroom.jpg'
import atrium from '../images/atrium.jpg'
import diningroom from '../images/diningroom.jpg'
import livingroom from '../images/livingroom.jpg'
import livingroom2 from '../images/livingroom2.jpg'
function Showcase() {
    return(
        <div class="Showcase">
            <h2>Showcase.</h2>
            <hr/>
            <div class="images">
                <img src={kitchen} alt=""/>
                <img src={atrium} alt=""/>
                <img src={livingroom} alt=""/>
                <img src={diningroom} alt=""/>
                <img src={bedroom} alt=""/>
                <img src={livingroom2} alt=""/>
            </div>
        </div>
    )
}
export default Showcase