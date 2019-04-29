import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { MESSAGE_ME_MODAL_ID } from './MessageMeModal'
import * as ModalModule from '../../actions/modalModule'

const ContactMe = ({ showModal }) => (
    <div>
        <h3 className="section-header">Contact Me</h3>

        <ListGroup variant="flush">
            <ListGroup.Item variant="dark" action onClick={showModal}>
                <i className="fa fa-envelope" /> Message Me
            </ListGroup.Item>
            <ListGroup.Item variant="dark" action href="https://www.linkedin.com/in/mschwartz91">
                <i className="fab fa-linkedin" />  LinkedIn
            </ListGroup.Item>
            <ListGroup.Item variant="dark" action href="https://github.com/mattschwartz">
                <i className="fab fa-github" /> GitHub
            </ListGroup.Item>
        </ListGroup>
    </div>
)

export default connect(
    undefined,
    dispatch => ({
        showModal: () => dispatch(ModalModule.setModalVisible(MESSAGE_ME_MODAL_ID))
    })
)(ContactMe)
