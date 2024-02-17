"use client";
import React, { useState } from "react";
import Playlist from "./Playlist";
import Videos from "./Videos";
// import { XMarkIcon } from '@heroicons/react/20/solid'

const VideoPlayer = () => {
  const [playlist, setPlaylist] = useState([
    { id: 1, title: "Arctic Polar bears at risk of starvation_World News", src: "/VideoOne.mp4" },
    { id: 2, title: "Dil hai chota sa choti si asha || Best Children Dance Cover", src: "/VideoTwo.mp4" },
    { id: 3, title: "Mr. Bean || Funny Clip", src: "/VideoThree.mp4" },
    { id: 4, title: "Tom and Jerry", src: "/VideoFour.mp4" },
  ]);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoSelected = (index: any) => {
    setCurrentVideo(index);
  };

  return (
    <>
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[45rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <p className="text-sm leading-6 text-gray-900">
        <a href="#">
          <strong className="font-semibold text-lg">Video Player</strong>
          <svg viewBox="0 0 4 4" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Welcome to your Playlist&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only"></span>
        </button>
      </div>
    </div>
      <div className="flex flex-col aspect-[577/310] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] lg:flex-row justify-center items-center lg:items-start bg-gray-100 min-h-screen p-4">
        <div className="lg:w-2/3 lg:mr-8">
          <Videos video={playlist[currentVideo]} autoplay={true} />
        </div>
        <div className="lg:w-1/3 lg:ml-8">
          <Playlist
            playlist={playlist}
            currentVideo={currentVideo}
            onVideoSelect={handleVideoSelected}
            setPlaylist={setPlaylist}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
