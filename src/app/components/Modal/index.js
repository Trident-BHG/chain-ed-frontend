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
}) {
  return (
    <ChakraModal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        {!!title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{modalBody}</ModalBody>
        {!!modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
}
