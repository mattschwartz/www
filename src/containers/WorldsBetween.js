import React from 'react'
import StoneQuest from '../components/StoneQuest/StoneQuest'

import '../styles/worldsBetween.css'
import backgroundImage from '../res/stonequestPreview.png'

class WorldsBetween extends React.Component {

    componentDidMount() {
        document.title = 'Worlds Between Blood'
    }

    render() {
        return (
            <div className="worlds-between">
                <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="overlay" />
                </div>

                <div className="container">
                    <div className="title-container">
                        <h1 className="heading">Worlds Between Blood</h1>
                        <hr className="divider" />
                        <div className="subheading">written and designed by Matt Schwartz</div>
                    </div>

                    <h3 className="section-header">About</h3>
                    <p><em>As it pertains to the on-going work of</em>&nbsp; <strong>Worlds Between Blood</strong>:</p>
                    <p>Details about the story and game mechanics are still too early in development to disclose at this time. The story points that I have already began working on are exciting enough for me to want to delay exposing these details for fear of ruining the story for anyone. I am just as excited to read it as I am to write it.</p>
                    <p>The mechanics of the game are still forming and will evolve with the story itself. It is vital to me that the mechanics and the story are complements. Thus, this page mostly exists as homage to the project I started many years ago: StoneQuest.</p>

                    <StoneQuest />
                </div>
            </div>
        )
    }
}

export default WorldsBetween
