import React from 'react'
import { connect } from 'react-redux'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import * as ModalModule from '../../actions/modalModule'

import '../../styles/modal.css'

const apigUrl = 'https://o6hwklgbe1.execute-api.us-east-1.amazonaws.com/prod/v1/messages'

const MAX_MESSAGES_SENT_IN_SESSION = 2
const MAX_MESSAGE_LENGTH = 1024
export const MESSAGE_ME_MODAL_ID = 'www/modal/message-me-modal-id'

const MessageSendStatus = {
    NOT_SENT: 'www/message-me-modal/NOT_SENT',
    SENDING: 'www/message-me-modal/SENDING',
    SENT: 'www/message-me-modal/SENT',
    FAILED: 'www/message-me-modal/FAILED',
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
            messageText: null,

            emailTouched: false,
            messageTextTouched: false,

            messageFailedArgument: null,
            messageFailedReason: null,

            numMessagesSentInSession: 0,
        }

        this.emailTextChanged = this.emailTextChanged.bind(this)
        this.messageTextAreaChanged = this.messageTextAreaChanged.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.setCharsRemaining = this.setCharsRemaining.bind(this)
        this.onModalOpened = this.onModalOpened.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    render() {
        const { visibleModalId } = this.props
        const { isDisabled, messageSendStatus } = this.state

        return (
            <Modal
                show={visibleModalId === MESSAGE_ME_MODAL_ID}
                onEnter={this.onModalOpened}
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
                    {this.renderForm()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                    {messageSendStatus !== MessageSendStatus.SENT
                        && <Button variant="primary" onClick={this.sendMessage} disabled={isDisabled}><i className="fas fa-paper-plane" /> Send</Button>}
                </Modal.Footer>
            </Modal>
        )
    }

    onModalOpened() {
        if (this.state.numMessagesSentInSession >= MAX_MESSAGES_SENT_IN_SESSION) {
            this.setState({
                ...this.state,
                isDisabled: true,
                messageSendStatus: MessageSendStatus.FAILED,
                messageFailedReason: "Please don't spam me.",
            })
        }
    }

    renderForm() {
        const { isDisabled, messageSendStatus } = this.state

        // No reason to make it any easier to spam
        if (messageSendStatus === MessageSendStatus.SENT) {
            return false
        }

        return (
            <Form>
                <Form.Group controlId="messageMeForm.ControlInput1">
                    <Form.Label>Your email address <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onBlur={this.emailTextChanged}
                        disabled={isDisabled}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="messageMeForm.ControlTextarea1">
                    <Form.Label>Message <strong className="text-danger">*</strong></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        onBlur={this.messageTextAreaChanged}
                        onChange={this.setCharsRemaining}
                        maxLength={MAX_MESSAGE_LENGTH}
                        disabled={isDisabled}
                        required
                    />
                    <span className="text-small">remaining {this.state.charactersRemaining} / {MAX_MESSAGE_LENGTH}</span>

                    <p className="mt-3">Please don't spam me. I will spam you back.</p>
                </Form.Group>
            </Form>
        )
    }

    renderSendStatus() {
        switch (this.state.messageSendStatus) {
            case MessageSendStatus.SENDING:
                return (
                    <Alert variant="info">
                        <span><i className="fas fa-circle-notch fa-spin" /> Sending message...</span>
                    </Alert>
                )

            case MessageSendStatus.SENT:
                return (
                    <Alert variant="success">
                        <span><i className="fas fa-check" /> Your message has been sent!</span>
                    </Alert>
                )

            case MessageSendStatus.FAILED:
                return (
                    <Alert variant="danger">
                        <div><i className="fas fa-times" /> Failed to send message.</div>
                        <div>Reason: {this.state.messageFailedReason || 'Internal server error.'}</div>
                    </Alert>
                )

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

    isValid(request) {
        if (!request) {
            this.setState({
                ...this.state,
                messageSendStatus: MessageSendStatus.FAILED,
                messageFailedArgument: null,
                messageFailedReason: 'Internal server error.',
            })
            return false
        }
        if (!request.fromEmail || request.fromEmail.indexOf('@') === -1 || request.fromEmail.indexOf('.') === -1) {
            this.setState({
                ...this.state,
                messageSendStatus: MessageSendStatus.FAILED,
                messageFailedArgument: 'fromEmail',
                messageFailedReason: 'Please enter a valid email address.',
            })
            return false
        }
        if (!request.messageContents) {
            this.setState({
                ...this.state,
                messageSendStatus: MessageSendStatus.FAILED,
                messageFailedArgument: 'messageContents',
                messageFailedReason: 'Please enter a lovely message.',
            })
            return false
        }

        return true
    }

    sendMessage() {
        const requestBody = {
            fromEmail: this.state.email,
            messageContents: this.state.messageText,
        }

        if (!this.isValid(requestBody)) {
            return
        }

        console.debug('Sending message', requestBody)

        this.setState({
            ...this.state,
            isDisabled: true,
            messageSendStatus: MessageSendStatus.SENDING,
            messageFailedArgument: null,
            messageFailedReason: null,
        })

        fetch(apigUrl, {
            method: 'POST',
            mode: 'cors',
            referrerPolicy: 'origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
            body: JSON.stringify(requestBody),
        })
            .then(
                async res => {
                    const responseModel = await res.json();
                    console.debug('Received response:', responseModel)

                    if (res.ok) {
                        this.setState({
                            ...this.state,
                            isDisabled: true,
                            messageSendStatus: MessageSendStatus.SENT,
                            messageFailedArgument: null,
                            messageFailedReason: null,
                            numMessagesSentInSession: this.state.numMessagesSentInSession + 1,
                        })
                    } else {
                        this.setState({
                            ...this.state,
                            isDisabled: false,
                            messageSendStatus: MessageSendStatus.FAILED,
                            messageFailedArgument: responseModel.failedArgument,
                            messageFailedReason: responseModel.reason,
                        })
                    }
                },
                err => {
                    console.error('Request failed:', err)
                    this.setState({
                        ...this.state,
                        isDisabled: false,
                        messageSendStatus: MessageSendStatus.FAILED,
                        messageFailedArgument: null,
                        messageFailedReason: err,
                    })
                }
            )
    }

    messageTextAreaChanged(e) {
        this.setState({
            ...this.state,
            messageText: e.target.value,
            messageTextTouched: true,
        })
    }

    emailTextChanged(e) {
        this.setState({
            ...this.state,
            email: e.target.value,
            emailTouched: true,
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
