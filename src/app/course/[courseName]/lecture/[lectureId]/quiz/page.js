"use client";

import { useState } from "react";

import QuizPanel from "@/app/components/quiz/QuizPanel";
import UserInputModal from "@/app/components/UserInputModal";

export default function Quiz() {
  const [isOpen, setIsOpen] = useState(true);
  function onClose() {
    setIsOpen(false);
  }
  function onOpen() {
    setIsOpen(true);
  }
  return (
    <div className="col-span-8 mt-8 flex flex-col">
      <QuizPanel />
      <UserInputModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
