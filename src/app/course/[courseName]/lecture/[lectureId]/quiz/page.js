"use client";

import { useState } from "react";

import QuizPanel from "@/app/components/quiz/QuizPanel";

export default function Quiz() {
  return (
    <div className="col-span-8 mt-8 flex flex-col">
      <QuizPanel />
    </div>
  );
}
