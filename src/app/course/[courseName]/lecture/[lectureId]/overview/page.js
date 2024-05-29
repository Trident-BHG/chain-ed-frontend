"use client";

import { usePathname } from "next/navigation";

import VideoView from "@/app/components/VideoView";
import Tab from "@/app/components/Tab";

import { courseDetails as data } from "@/constants";
import { useEffect, useState } from "react";

export default function LectureOverviewPage() {
  const pathname = usePathname();
  const [videoSrc, setVideoSrc] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDescription] = useState(null);

  function findVideoSrcFromPathName() {
    data[0].details.sections.forEach((section) => {
      section.subSections.forEach((subsection) => {
        if (subsection.link == pathname) {
          setVideoSrc(subsection.videoSrc);
          setVideoTitle(subsection.name);
          setVideoDescription(subsection.videoDescription);
        }
      });
    });
  }

  useEffect(() => {
    findVideoSrcFromPathName();
  }, []);

  return (
    <div className="col-span-8 mt-8 flex flex-col">
      <div className="h-1/2 px-5">
        <VideoView src={videoSrc} />
      </div>
      <div className="flex flex-col px-5">
        <h1 className="mt-10 text-3xl font-medium">{videoTitle}</h1>
        <div className="mt-3 flex gap-5">
          <div className="flex gap-3 ">
            <p>Duration : </p>
            <p className="font-semibold"> {data[0].duration} </p>
          </div>
          <div className="flex gap-3">
            <p>By : </p>
            <p className="font-semibold"> {data[0].author} </p>
          </div>
          <div className="flex gap-3">
            <p>Rating : </p>
            <p className="font-semibold"> {data[0].rating} star</p>
          </div>
        </div>
        <div className="mt-10 ">
          <Tab videoDescription={videoDescription} />
        </div>
      </div>
    </div>
  );
}
