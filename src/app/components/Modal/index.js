"use client";

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function Modal({
  isOpen,
  onClose,
  onOpen,
  title,
  children: modalBody,
  modalFooter,
  modalCloseButton,
}) {
  return (
    <ChakraModal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        {!!title && <ModalHeader>{title}</ModalHeader>}
        {modalCloseButton ? <ModalCloseButton /> : null}
        <ModalBody>{modalBody}</ModalBody>
        {!!modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
}
