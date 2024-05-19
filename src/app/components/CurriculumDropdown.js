"use client";

import { useState } from "react";

export default function CurriculumDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer rounded border-b-2 border-gray-300 bg-gray-100 p-2"
      >
        <div className="flex items-center justify-between p-2 ">
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">
                Introduction to Javascript
              </h3>
              <p className="text-sm">1 lecture | 2m length | $0.5 cashback</p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="blue"
            className="h-8 w-8"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="mx-5 flex items-center justify-between p-2 ">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-600">
                Introduction
              </h3>
            </div>

            <div class="relative size-8">
              <svg
                class="size-full"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-gray-200"
                  stroke-width="4"
                ></circle>

                <g class="origin-center -rotate-90 transform">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    class="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="4"
                    stroke-dasharray="100"
                    stroke-dashoffset="75"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>
          <div className="mx-5 flex items-center justify-between p-2 ">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-600">
                Introduction
              </h3>
            </div>
            <div class="relative size-8">
              <svg
                class="size-full"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-gray-200"
                  stroke-width="4"
                ></circle>

                <g class="origin-center -rotate-90 transform">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    class="stroke-current text-blue-600 dark:text-blue-500"
                    stroke-width="4"
                    stroke-dasharray="100"
                    stroke-dashoffset="75"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  );
}
