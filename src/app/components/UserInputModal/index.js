"use client";

import { useState } from "react";

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
  modalAction,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const modalFooter = (
    <Button onClick={() => modalAction(firstName + " " + lastName)}>
      Submit
    </Button>
  );

  return (
    <Modal
      title="Quick one"
      onClose={onClose}
      isOpen={isOpen}
      modalFooter={modalFooter}
    >
      <Text>Before proceeding further, please provide a few details</Text>
      <FormControl mt={4}>
        <FormLabel>First name</FormLabel>
        <Input type="text" onChange={(e) => setFirstName(e.target.value)} />
        <FormLabel>Last name</FormLabel>
        <Input type="text" onChange={(e) => setLastName(e.target.value)} />
      </FormControl>
    </Modal>
  );
}
