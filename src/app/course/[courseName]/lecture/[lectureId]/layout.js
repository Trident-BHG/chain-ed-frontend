"use client";

import CurriculumDropdown from "@/app/components/CurriculumDropdown";
import VideoView from "@/app/components/VideoView";
import Tab from "@/app/components/Tab";

// import data from "@/constants/courseCurriculumDetails.json";
import { courseDetails as data } from "@/constants";

export default function LectureOverviewPage({ children }) {
  return (
    <div className="grid h-full grid-cols-12">
      {children}
      <div className="col-span-4 border-l-2 border-gray-200 p-8">
        <div className="mb-3">
          <h1 className="text-gray-400">Your learning progress</h1>
          <div className="rounded-md bg-blue-200 px-4 py-3">
            <div className="flex justify-between">
              <p className="font-semibold">60%</p>
              <p className="font-semibold">42 / 78 Completion</p>
            </div>
            <div
              className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-blue-700 text-center text-xs text-white transition duration-500"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-gray-400">Days to complete the Course</h1>
          <div className="rounded-md bg-yellow-200 px-4 py-3">
            <div className="flex justify-between">
              <p className="font-semibold">80%</p>
              <p className="font-semibold">9 days left</p>
            </div>
            <div
              className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-yellow-600 text-center text-xs text-white transition duration-500"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-gray-400">Earnings</h1>
          <div className="flex justify-between rounded-md bg-green-200 px-4 py-3">
            <div className="flex w-3/5 flex-col">
              <p className="font-semibold">$10 / $40 earned</p>
              <div
                className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-green-700 text-center text-xs text-white transition duration-500"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            <div className="cursor-pointer rounded-lg border-4 border-green-700 bg-green-400 p-2 font-semibold text-green-700">
              Claim Now
            </div>
          </div>
        </div>

        <div className=" border-gray-500 py-5 text-xl font-semibold">
          Course Outline
        </div>
        <div className="h-screen">
          {data[0]["details"]["sections"].map((section, index) => {
            return <CurriculumDropdown data={section} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
