import React from 'react'
import WelcomeFold from '../components/Home/WelcomeFold'
import MyProjects from '../components/Home/MyProjects'
import AboutMe from '../components/Home/AboutMe'
import ContactMe from '../components/Home/ContactMe'
import SiteInfo from '../components/Home/SiteInfo'

import '../styles/home.css'
import MessageMeModal from '../components/Home/MessageMeModal';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <MessageMeModal />
                <section>
                    <WelcomeFold />
                </section>
                <section>
                    <div className="container">
                        <MyProjects />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <AboutMe />
                    </div>
                </section>
                <section style={{ backgroundColor: '#233140' }}>
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-sm">
                                <ContactMe />
                            </div>
                            <div className="col-sm">
                                <SiteInfo />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
