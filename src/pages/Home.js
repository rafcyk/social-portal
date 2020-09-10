import React from 'react';
import Footer from '../components/Footer';

import mainPhoto from '../images/home.png';

const Home = () => {
    return(
        <>
        <main>
            <div className = 'wrap'>
                <div className = 'photo-wrap'><img src = {mainPhoto} alt = 'people' className = 'main-photo'/>
                    <div className = 'back-dark'></div>
                </div>
                

                <nav>
                    <p className = 'portal-name'>pwsip usos portal</p>
                    <button className = 'sign-in'>zaloguj się</button>

                </nav>

                <div className = 'welcome-text'>
                    <h1>Razem możemy więcej!</h1>

                    <p>Portal dla studentów i pracowników, na którym każdy może podzielić się ciekawymi sprawami z życia uczelni lub niekoniecznie. Połączmy się wszyscy.</p>
                </div>
                <Footer/>
            </div>
        </main>
        </>
    )
}

export default Home;