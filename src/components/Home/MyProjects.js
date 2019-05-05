import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as ModalModule from '../../actions/modalModule'
import YouTubeModal, { YOUTUBE_MODAL_ID } from './YouTubeModal'

import stonequestPreview from '../../res/stonequestPreview.png'
import afterPreview from '../../res/afterPreview.png'
import rogrePreview from '../../res/rogrePreview.png'

const renderWorldsBetweenTabPane = () => (
    <div className="row mt-3">
        <div className="col-sm-12 col-lg-6">
            <p><strong>Worlds Between Blood</strong> started out as a very basic 2D roguelike written in Java in 2012 using the Swing library.
                Over time, it has been rewritten and had all of its features reworked several times over.</p>
            <div className="btn-group full-width">
                <a className="btn btn-primary" href="/worlds-between">Learn More</a>
            </div>
            <hr className="d-block d-lg-none" />
        </div>

        <div className="col-sm-12 col-lg-6">
            <img className="project-preview-img" src={stonequestPreview} alt="Worlds Between Blood preview" />
        </div>
    </div>
)

const renderAfterTabPane = () => (
    <div className="row mt-3">
        <div className="col-sm-12 col-lg-6">
            <p>After is a 2D puzzle platformer, created in collaboration with four other students at UT through the Game Development Program.</p>
            <p>The player plays as the apparent lone survivor of a post-apocalyptic world whose self-found purpose is to scour the city for clues to his identity and purpose as well as to discover the cause of the recent city's destruction.</p>

            <div className="btn-group full-width">
                <a className="btn btn-primary" href="/after">Learn More</a>
                <a className="btn btn-primary" href="https://www.github.com/mattschwartz/after"><i className="fab fa-github" /> View Source</a>
            </div>
            <hr className="d-block d-lg-none" />
        </div>
        <div className="col-sm-12 col-lg-6">
            <img className="project-preview-img" src={afterPreview} alt="After preview" />
        </div>
    </div>
)

const renderROgreTabPane = (showYouTubeModal) => (
    <div className="row mt-3">
        <div className="col-sm-12 col-lg-6">
            <p>In the spring of 2014, I undertook a game technology class at UT and along with a group of students, we worked on projects targeted at implemented specific aspects of game design.</p>
            <p>At the end of the semester, my team and I created the game ROgre (a dungeon crawler written in <a className="fancy-link" href="http://www.ogre3d.org/">Ogre 3D</a>) in C++.</p>

            <div>
                <button className="btn btn-danger full-width" onClick={showYouTubeModal}><i className="fab fa-youtube" /> Watch the trailer</button>
            </div>
            <div className="btn-group mt-3 full-width">
                <a className="btn btn-primary" href="/rogre">Learn More</a>
                <a className="btn btn-primary" href="https://www.github.com/mattschwartz/rogre"><i className="fab fa-github" /> View Source</a>
            </div>
            <hr className="d-block d-lg-none" />
        </div>
        <div className="col-sm-12 col-lg-6">
            <img className="project-preview-img" src={rogrePreview} alt="ROgre preview" />
        </div>
    </div>
)

const MyProjects = ({ showYouTubeModal }) => (
    <div className="my-projects">
        <YouTubeModal
            title="ROgre"
            youTubeUrl="https://www.youtube.com/embed/pd1MyZFK1-8"
        />
        <h1 className="section-header">My Projects</h1>

        <Tabs id="projects-tabs" defaultActiveKey="worlds-between">
            <Tab eventKey="worlds-between" title="Worlds Between Blood">
                {renderWorldsBetweenTabPane()}
            </Tab>
            <Tab eventKey="after" title="After">
                {renderAfterTabPane()}
            </Tab>
            <Tab eventKey="rogre" title="ROgre">
                {renderROgreTabPane(showYouTubeModal)}
            </Tab>
        </Tabs>
    </div>
)

export default connect(
    undefined,
    dispatch => ({
        showYouTubeModal: () => dispatch(ModalModule.setModalVisible(YOUTUBE_MODAL_ID))
    })
)(MyProjects)
