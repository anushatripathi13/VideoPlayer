import React, { useRef, useState, useEffect } from 'react';

const Videos = ({video, autoPlay}: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(autoPlay);
    const [currentTime, setCurrentTime] = useState(0);

      const handlePlayPause = () => {
        if (videoRef.current) {
          if (isVideoPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsVideoPlaying(!isVideoPlaying);
        }
      };

      const handleTimeUpdate = () => {
        if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime);
        }
      };

      const handleSeek = (time: any) => {
        if (videoRef.current) {
        videoRef.current.currentTime = time;
        setCurrentTime(time);
        }
      };
    
      const handleSpeedChange = (speed: any) => {
        if (videoRef.current) {
        videoRef.current.playbackRate = speed;
        }
      };

      useEffect(() => {
        if (videoRef.current) {
          videoRef.current.addEventListener('loadedmetadata', () => {
            setCurrentTime(0);
          });
        }
        return () => {
          if (videoRef.current) {
            videoRef.current.removeEventListener('loadedmetadata', () => {});
          }
        };
      }, [video]);
    

  return (
    <div className="flex flex-col">
      <video
        ref={videoRef}
        src={video.src}
        controls
        onTimeUpdate={handleTimeUpdate}
        autoPlay={autoPlay}
      />
      <div className='flex'>
        <button type="button" className="flex rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold mt-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handlePlayPause}>{isVideoPlaying ? 'Pause' : 'Play'}</button>
        {video.duration && (
          <span className=''>{currentTime.toFixed(2)} / {video.duration.toFixed(2)}</span>
        )}
        <input
        className='w-full m-2 flex'
          type="range"
          min={0}
          max={video.duration}
          value={currentTime}
          onChange={(e) => handleSeek(e.target.value)}
        />
        <select className='flex h-8 w-auto mt-2 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' onChange={(e) => handleSpeedChange(e.target.value)}>
          <option value="1">Normal</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>
  )
}

export default Videos