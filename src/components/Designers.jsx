import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
function Designers() {
    return(
        <div class="Designers">
            <h2>Designers</h2>
            <hr/>
            <p>The best team in the world.
            </p>
            <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p><b>Our designers are thoughtfully chosen
            </b></p>
            <div class="member">
                <img src={team1} alt=""/>
                <div class="Description">
                <h3>John Doe</h3> 
                <p class="Position">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            </div>
            <div class="member">
                <img src={team2} alt=""/>
                <div class="Description">
                <h3>Jane Doe</h3>
                <p class="Position">Designers</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            </div>
            <div class="member">
                <img src={team3} alt=""/>
                <div class="Description">
                    <h3>Mike Ross</h3>
                    <p class="Position">Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                    </p>
                </div>
            </div>
        </div>
        )
}
export default Designers