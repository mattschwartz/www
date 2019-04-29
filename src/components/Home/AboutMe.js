import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default () => (
    <div id="about-me" className="about-me">
        <h1 className="section-header">About Me</h1>

        <Timeline lineColor={'#18bc9c'}>
            <TimelineItem key="001" dateText="May 2018 to Present Day">
                <h3>Amazon Prime Video, SDE</h3>
                <p>Working with a group of incredibly talented people from all over the world at Amazon to deliver streaming live content to customers everywhere on Prime Video.</p>
            </TimelineItem>
            <TimelineItem key="002" dateText="2015 to 2018">
                <h3>Axial Commerce, Co-Lead Developer</h3>
                <p>We done did this.</p>
            </TimelineItem>
            <TimelineItem key="003" dateText="2014 to 2015">
                <h3>Tradelogic Corporation</h3>
            </TimelineItem>
            <TimelineItem key="004" dateText="2012 to 2015" dateInnerStyle={{ background: '#76bb7f' }}>
                <h3>University of Texas at Austin</h3>
                <p>Graduated with a BS in Computer Science as well as a certificate in game design from the <a className="fancy-link" href="http://gamedev.utexas.edu">GAMMA Program</a>, where I worked with a multidisciplinary team of individuals to create the game After.</p>
            </TimelineItem>
            <TimelineItem key="005" dateText="2009 to 2011" dateInnerStyle={{ background: '#76bb7f' }}>
                <h3>LeTourneau University</h3>
            </TimelineItem>
        </Timeline>
    </div>
)
