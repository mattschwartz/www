import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import stonequestPreview from '../../res/stonequestPreview.png'
import afterPreview from '../../res/afterPreview.png'
import rogrePreview from '../../res/rogrePreview.png'

const renderStoneQuestTabPane = () => (
    <div className="row mt-3">
        <div className="col-sm-12 col-lg-6">
            <p>
                <em>Note: this is not to be confused with <a className="fancy-link" href="https://stonequest.de/">this StoneQuest</a>, to which neither I nor my project have any relation.</em>
            </p>
            <p>
                StoneQuest (working title) started out as a very basic 2D roguelike written in Java in 2012 using the Swing library.
                Over time, it has been rewritten and had all of its features reworked several times over.

                View the page URL below for more information about the progression of StoneQuest and a detailed look into its features, story and purpose.
        </p>
            <div className="btn-group">
                <a className="btn btn-primary" href="/between-worlds">Project Page</a>
            </div>
        </div>
        <div className="col-sm-12 col-lg-6">
            <img className="project-preview-img" src={stonequestPreview} alt="StoneQuest preview" />
        </div>
    </div>
)

const renderAfterTabPane = () => (
    <div className="row mt-3">
        <div className="col-sm-12 col-lg-6">
            <p>After is a 2D puzzle platformer, created in collaboration with four other students at UT through the Game Development Program.</p>
            <p>The player plays as the apparent lone survivor of a post-apocalyptic world whose self-found purpose is to scour the city for clues to his identity and purpose as well as to discover the cause of the recent city's destruction.</p>

            <div className="btn-group">
                <a className="btn btn-primary" href="/after">Project Page</a>
                <a className="btn btn-primary" href="https://www.github.com/mattschwartz/after"><i className="fab fa-github" /> Source Code</a>
            </div>
        </div>
        <div className="col-sm-12 col-lg-6">
            <img className="project-preview-img" src={afterPreview} alt="After preview" />
        </div>
    </div>
)

const renderROgreTabPane = () => (
    <div className="row mt-3">
        <div className="col-sm-12 col-lg-6">
            <p>In the spring of 2014, I undertook a game technology class at UT and along with a group of students, we worked on projects targeted at implemented specific aspects of game design.</p>
            <p>At the end of the semester, my team and I created the game ROgre (a dungeon crawler written in <a className="fancy-link" href="http://www.ogre3d.org/">Ogre 3D</a>) in C++.</p>

            <div className="btn-group">
                <button className="btn btn-danger"><i className="fab fa-youtube" /> Watch the trailer</button>
                <a className="btn btn-primary" href="/rogre">Project Page</a>
                <a className="btn btn-primary" href="https://www.github.com/mattschwartz/rogre"><i className="fab fa-github" /> Source Code</a>
            </div>
        </div>
        <div className="col-sm-12 col-lg-6">
            <img className="project-preview-img" src={rogrePreview} alt="After preview" />
        </div>
    </div>
)

export default () => (
    <div>
        <h1 className="section-header">My Projects</h1>

        <Tabs id="projects-tabs" defaultActiveKey="stonequest">
            <Tab eventKey="stonequest" title="StoneQuest">
                {renderStoneQuestTabPane()}
            </Tab>
            <Tab eventKey="after" title="After">
                {renderAfterTabPane()}
            </Tab>
            <Tab eventKey="rogre" title="ROgre">
                {renderROgreTabPane()}
            </Tab>
        </Tabs>
    </div>
)
