import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import * as ModalModule from '../../actions/modalModule'

import '../../style/modal.css'

export const YOUTUBE_MODAL_ID = 'www/modal/youtube-modal-id'

const YouTubeModal = ({
    title,
    youTubeUrl,
    hideModal,
    visibleModalId
}) => (
        <Modal
            show={visibleModalId === YOUTUBE_MODAL_ID}
            onHide={hideModal}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe
                    className="youtube-modal"
                    title={`${title}+youtube+iframe`}
                    src={youTubeUrl}
                    frameborder="0"
                    allowfullscreen=""
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

export default connect(
    state => ({
        visibleModalId: state.modal.visibleModalId
    }),
    dispatch => ({
        hideModal: () => dispatch(ModalModule.hideModal())
    })
)(YouTubeModal)
