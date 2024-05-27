"use client";

import {
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

import Modal from "@/app/components/Modal";

export default function UserInputModal({
  isOpen,
  onClose,
  onOpen,
  children: modalBody,
}) {
  const modalFooter = <Button>Proceed to Dashboard</Button>;

  return (
    <Modal
      title="Quick one"
      onClose={onClose}
      isOpen={isOpen}
      modalFooter={modalFooter}
    >
      <Text>
        Before proceeding to your dashboard please provide a few details
      </Text>
      <FormControl mt={4}>
        <FormLabel>First name</FormLabel>
        <Input type="text" />
        <FormLabel>Last name</FormLabel>
        <Input type="text" />
      </FormControl>
    </Modal>
  );
}
