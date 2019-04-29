import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default () => (
    <>
        <h3 className="section-header text-right">Site Info</h3>

        <ListGroup variant="flush">
            <ListGroup.Item className="text-right" variant="dark">
                Powered by React and served fresh by AWS
            </ListGroup.Item>
            <ListGroup.Item className="text-right" variant="dark">
                Site written by Matt Schwartz, 2019
            </ListGroup.Item>
            <ListGroup.Item className="text-right fancy-link" variant="dark" action href="https://github.com/mattschwartz/www">
                Source Code
            </ListGroup.Item>
        </ListGroup>
    </>
)
