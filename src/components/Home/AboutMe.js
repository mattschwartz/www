import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default () => (
    <div id="about-me" className="about-me">
        <h1 className="section-header">About Me</h1>

        <Timeline lineColor={'#10c195'}>
            <TimelineItem key="001" dateText="May 2018 to Present Day" dateInnerStyle={{ background: '#dc3545' }}>
                <h3>Amazon Prime Video, SDE</h3>
                <p>Working with a group of incredibly talented people from all over the world at Amazon to deliver streaming live content to customers everywhere on Prime Video.</p>
            </TimelineItem>
            <TimelineItem key="002" dateText="2015 to 2018" dateInnerStyle={{ background: '#dc3545' }}>
                <h3>Axial Commerce, Co-Lead Developer</h3>
                <p>Starting in early 2015, I worked alongside a good friend and one of the best developers I've met to build Axial from scratch. We worked closely with the founding CEO and project manager to create <a className="fancy-link" href="https://www.axialcommerce.com">Axial Commerce</a>, a web-based service that provided high availability and functionality to hundreds of customers in the restaurant business.</p>

                <p>We gave owners a way to understand their business better with detailed reports based on myriad data collected from sales and performance, accessible from any internet-connected device in real-time. Our mission was to get managers out of the back office where they had to spend much of their time on a computer and bring them to the floor with the customers where they matter most to their company.</p>
            </TimelineItem>
            <TimelineItem key="003" dateText="2014 to 2015" dateInnerStyle={{ background: '#dc3545' }}>
                <h3>Tradelogic Corporation</h3>
                <p>Primarily worked on homebrewed CRM software with a C# desktop app backed by a Java EJB platform and a PostgreSQL database.</p>
            </TimelineItem>
            <TimelineItem key="004" dateText="2012 to 2015" dateInnerStyle={{ background: '#10c195' }}>
                <h3>University of Texas at Austin</h3>
                <p>Graduated with a BS in Computer Science as well as a certificate in game design from the <a className="fancy-link" href="http://gamedev.utexas.edu">GAMMA Program</a>, where I worked with a multidisciplinary team of individuals to create the game After.</p>
            </TimelineItem>
            <TimelineItem key="005" dateText="2009 to 2011" dateInnerStyle={{ background: '#10c195' }}>
                <h3>LeTourneau University</h3>
            </TimelineItem>
        </Timeline>
    </div>
)
