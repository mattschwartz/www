import React from 'react'
import { Carousel, Col, Form, ListGroup } from 'react-bootstrap'
import '../styles/after.css'

import backgroundImage from '../res/afterBackground.png'
import trailer from '../res/trailer.mp4'
import afterScreenshot1 from '../res/afterScreenshot1.png'
import afterScreenshot2 from '../res/afterScreenshot2.png'
import afterScreenshot3 from '../res/afterScreenshot3.png'
import afterScreenshot4 from '../res/afterScreenshot4.png'
import afterScreenshot5 from '../res/afterScreenshot5.png'
import afterScreenshot6 from '../res/afterScreenshot6.png'
import afterScreenshot7 from '../res/afterScreenshot7.png'

class After extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            osSelected: 'none'
        }
    }

    render() {
        return (
            <div className="after">
                <div className="after-backdrop" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="crt overlay"></div>
                    <div className="title-container">
                        <h1>$ after<span className="blinking-cursor">&#x2588;</span></h1>
                        <div className="subtitle"># a UT gamma project</div>
                    </div>
                </div>

                <div className="container">
                    <h1 className="section-header">About</h1>
                    <p>After takes place in the ruins of a city in the near future. All life has disappeared except for a man who has forgotten everything. He must learn what happened to the city, what happened to the entire planet and what happened to its inhabitants before he can learn what happened to himself.</p>
                    <p>It is a puzzle platformer, focused on telling the story of the traveler and the city in which he finds himself through the environment and puzzles. After features three main levels, with a few more transitory levels, with unique puzzle elements in each. As a Unity game, there are builds available for Mac, PC and Linux as well as a mobile application available for Android devices (via an .apk file).</p>

                    <Carousel className="text-center">
                        <Carousel.Item><img src={afterScreenshot1} alt="afterScreenshot1" /></Carousel.Item>
                        <Carousel.Item><img src={afterScreenshot2} alt="afterScreenshot2" /></Carousel.Item>
                        <Carousel.Item><img src={afterScreenshot3} alt="afterScreenshot3" /></Carousel.Item>
                        <Carousel.Item><img src={afterScreenshot4} alt="afterScreenshot4" /></Carousel.Item>
                        <Carousel.Item><img src={afterScreenshot5} alt="afterScreenshot5" /></Carousel.Item>
                        <Carousel.Item><img src={afterScreenshot6} alt="afterScreenshot6" /></Carousel.Item>
                        <Carousel.Item><img src={afterScreenshot7} alt="afterScreenshot7" /></Carousel.Item>
                    </Carousel>

                    <h3>Credits</h3>
                    <ul>
                        <li>John Dodson (Art director)</li>
                        <li>Rob Luckfield (Sound engineer)</li>
                        <li>Tyler Pixley (Programmer)</li>
                        <li>Matt Schwartz (Programmer)</li>
                        <li>Taylor Womack (Animator and Scrum master)</li>
                    </ul>

                    <div className="mt-5">
                        <video width="100%" height="100%" controls>
                            <source src={trailer} type="video/mp4"></source>
                        </video>
                    </div>
                    <em>Trailer directed by Taylor Womack with sound by Rob Luckfield</em>

                    <h1 className="section-header">My Role</h1>
                    <div>
                        I worked with four other students through UT's multidisciplinary GAMMA game design program.
                        The course was designed to be student-driven, allowing teams to design their own games with guidance from the instructors.
                        My role in After was as one of the two programmers and lead programmer for mobile direction for the game. More specifically, my work entailed:
                        <ListGroup>
                            <ListGroup.Item variant="dark">
                                <strong>Designing the puzzle game loop</strong>
                                <p>I programmed a set of Unity prefabs that allowed new puzzles to be set up quickly by defining how each individual piece was involved with other parts of the level</p>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark">
                                <strong>Designing a simple sound manager</strong>
                                <p>I worked with our sound engineer, Rob, to develop a simple interface for adding and tweaking sounds in the game</p>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark">
                                <strong>Designing and implemented the mobile interface</strong>
                                <p>The instructors' gave additional credit for teams who implemented their game for mobile platforms as
                                well. Ours was the only team to have done this. I developed the mobile interface, which was simply drag-to-move
                                and touch-to-jump</p>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark">
                                <strong>Helped with the artwork</strong>
                                <p>I drew placeholder art and ended up finishing some first-pass artwork by our artist. The title scene
                                artwork (also featured as the banner at the top of this page) was drawn by me</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <h1 className="section-header">Play</h1>
                    <p>While the game is hosted on the University of Texas' game development page, <a className="fancy-link" href="http://www.cs.utexas.edu/~gamedev/fall-2014/Transient-Games/Release.html">here</a>, some browsers do not support Unity's web player.</p>

                    <h3>Download</h3>
                    <p>You can download a stand-alone version of After by selecting the file associated with your platform below. This will download a ZIP archive which you can then extract and run the game.</p>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="os-select">
                                <Form.Control as="select" onChange={e => this.setState({ ...this.state, osSelected: e.target.value })}>
                                    <option value="none">Select a platform...</option>
                                    <option value="./download/after_windows.zip">Windows</option>
                                    <option value="./download/after_osx.zip">Mac OSX</option>
                                    <option value="./download/after_linux.zip">Linux</option>
                                    <option value="./download/after_android.zip">Android (.apk)</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                                <button type="button" className="btn btn-primary" disabled={this.state.osSelected === 'none'}>Download</button>
                            </Form.Group>
                        </Form.Row>
                    </Form>

                    <h1 className="section-header">Source Code</h1>
                    <p>The full source code, including Unity project and assets, is available for review <a className="fancy-link" href="https://github.com/mattschwartz/after">here</a>. Go nuts.</p>
                </div>
            </div>
        )
    }
}

export default After
