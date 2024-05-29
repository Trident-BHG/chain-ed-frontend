"use client";

import { useState } from "react";
import DocIcon from "./icons/Doc";
import VideoIcon from "./icons/Video";

import { useRouter } from "next/navigation";

export default function CurriculumDropdown({
  data,
  index,
  activeSectionIndex,
  subsectionIndex,
}) {
  const router = useRouter();

  const isActive = activeSectionIndex === index;

  const [isOpen, setIsOpen] = useState(isActive);
  return (
    <div key={index}>
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">{data.name}</h3>
              <p className="text-sm">{data.sectionInfo}</p>
            </div>
          </div>

          {index < activeSectionIndex ? (
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
          ) : null}
        </div>
      </div>
      {isOpen && (
        <>
          {data.subSections.map((subsection, i) => {
            const isSubsectionActive = isActive && subsectionIndex === i;
            const dashOffset = isSubsectionActive
              ? "90"
              : i < subsectionIndex
                ? "0"
                : "100";

            return (
              <div
                className="mx-5 flex cursor-pointer items-center justify-between p-2"
                onClick={() => router.push(subsection.link)}
              >
                <div className="flex items-center gap-5">
                  {subsection.content.type === "doc" ? (
                    <DocIcon />
                  ) : (
                    <VideoIcon />
                  )}
                  <h3
                    className={`text-lg  ${isSubsectionActive ? "trxt-gray-800 font-bold	" : "font-medium text-gray-600"}`}
                  >
                    {subsection.name}
                  </h3>
                </div>

                <div className="relative size-8">
                  <svg
                    className="size-full"
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
                      className="stroke-current text-gray-200"
                      strokeWidth="4"
                    ></circle>

                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-blue-600 dark:text-blue-500"
                        strokeWidth="4"
                        stroke-dasharray="100"
                        stroke-dashoffset={dashOffset}
                      ></circle>
                    </g>
                  </svg>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
