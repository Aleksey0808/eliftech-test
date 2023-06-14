import {ModalContainer, ModelContent, ModalHeader, ModelTitle, ModalBody} from "./Modal.styled"

const Modal = () => {
    return(
        <ModalContainer>
        <ModelContent>
          <ModalHeader>
            <ModelTitle>Your cart</ModelTitle>
            <ModalBody></ModalBody>
          </ModalHeader>
        </ModelContent>
      </ModalContainer> 
    )
}

export default Modal