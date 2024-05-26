"use client";

import VideoView from "@/app/components/VideoView";
import Tab from "@/app/components/Tab";

export default function LectureOverviewPage() {
  return (
    <div className="col-span-8 mt-8 flex flex-col">
      <div className="h-1/2 px-5">
        <VideoView />
      </div>
      <div className="flex flex-col px-5">
        <h1 className="mt-10 text-3xl font-medium">
          How to interact with Smart contract using Ethersjs
        </h1>
        <div className="mt-3 flex gap-5">
          <div className="flex gap-3 ">
            <p>Duration : </p>
            <p className="font-semibold">16 Weeks</p>
          </div>
          <div className="flex gap-3">
            <p>By : </p>
            <p className="font-semibold">Wisdom Umanah</p>
          </div>
          <div className="flex gap-3">
            <p>Rating : </p>
            <p className="font-semibold">5 star</p>
          </div>
        </div>
        <div className="mt-10 ">
          <Tab />
        </div>
      </div>
    </div>
  );
}
