import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Modal } from 'react-bootstrap'
import * as ModalModule from '../../actions/modalModule'

import '../../styles/modal.css'

const MAX_MESSAGE_LENGTH = 1024
export const MESSAGE_ME_MODAL_ID = 'www/modal/message-me-modal-id'

const MessageSendStatus = {
    NOT_SENT: 'www/message-me-modal/NOT_SENT',
    SENDING: 'www/message-me-modal/SENDING',
    SENT: 'www/message-me-modal/SENT'
}

class MessageMeModal extends React.Component {

    messageTextArea

    constructor(props) {
        super(props)
        this.state = {
            messageSendStatus: MessageSendStatus.NOT_SENT,
            charactersRemaining: MAX_MESSAGE_LENGTH,
            isDisabled: false,
            email: null,
            messageText: null
        }

        this.emailTextChanged = this.emailTextChanged.bind(this)
        this.messageTextAreaChanged = this.messageTextAreaChanged.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.setCharsRemaining = this.setCharsRemaining.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    render() {
        const { visibleModalId } = this.props
        const { isDisabled } = this.state

        return (
            <Modal
                show={visibleModalId === MESSAGE_ME_MODAL_ID}
                onHide={this.closeModal}
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Message Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.renderSendStatus()}
                    <Form>
                        <Form.Group controlId="messageMeForm.ControlInput1">
                            <Form.Label>Your email address <strong className="text-danger">*</strong></Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onBlur={this.emailTextChanged} disabled={isDisabled} />
                        </Form.Group>
                        <Form.Group controlId="messageMeForm.ControlTextarea1">
                            <Form.Label>Message <strong className="text-danger">*</strong></Form.Label>
                            <Form.Control as="textarea" rows="3" onBlur={this.messageTextAreaChanged} onChange={this.setCharsRemaining} maxLength="MAX_MESSAGE_LENGTH" disabled={isDisabled} />
                            <span className="text-small">remaining {this.state.charactersRemaining} / {MAX_MESSAGE_LENGTH}</span>

                            <p className="mt-3">Please don't spam me. I will spam you back.</p>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                    <Button variant="primary" onClick={this.sendMessage} disabled={isDisabled}><i className="fas fa-paper-plane" /> Send</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    renderSendStatus() {
        switch (this.state.messageSendStatus) {
            case MessageSendStatus.SENDING:
                return <span><i className="fas fa-circle-notch fa-spin" /> Sending message...</span>
            case MessageSendStatus.SENT:
                return <span>Message delivered!</span>
            case MessageSendStatus.NOT_SENT:
            default:
                return false
        }
    }

    closeModal() {
        const { hideModal } = this.props

        hideModal()

        this.setState({
            messageSendStatus: MessageSendStatus.NOT_SENT,
            charactersRemaining: MAX_MESSAGE_LENGTH,
            isDisabled: false,
            email: null,
            messageText: null
        })
    }

    sendMessage() {
        console.debug('Sending message', this.state.messageText, 'from email', this.state.email)

        const self = this
        window.setTimeout(
            () => self.setState({ ...self.state, isDisabled: false, messageSendStatus: MessageSendStatus.SENT }),
            5000
        )

        this.setState({
            ...this.state,
            isDisabled: true,
            messageSendStatus: MessageSendStatus.SENDING
        })
    }

    messageTextAreaChanged(e) {
        this.setState({
            ...this.state,
            messageText: e.target.value
        })
    }

    emailTextChanged(e) {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }

    setCharsRemaining(e) {
        this.setState({
            ...this.state,
            charactersRemaining: MAX_MESSAGE_LENGTH - e.target.value.length
        })
    }
}

export default connect(
    state => ({
        visibleModalId: state.modal.visibleModalId
    }),
    dispatch => ({
        hideModal: () => dispatch(ModalModule.hideModal())
    })
)(MessageMeModal)
