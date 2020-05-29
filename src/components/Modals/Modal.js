import React from 'react'
import { Overlay } from 'react-native-elements';


const Modal = ({ visible, closeModal, children }) => {

    return (
        <Overlay
            isVisible={visible}
            windowBackgroundColor="rgba(0, 0, 0, 0.5)"
            borderRadius={10}
            onBackdropPress={closeModal}
            width={350}

        >
            {children}
        </Overlay>
    )
}

export default Modal
