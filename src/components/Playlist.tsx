import React from "react";

const Playlist = ({
  playlist,
  currentVideo,
  onVideoSelect,
  setPlaylist,
}: any) => {
  const handleVideoClick = (index: any) => {
    onVideoSelect(index);
  };

  const handleReorder = (dragIndex: any, hoverIndex: any) => {
    const newPlaylist = [...playlist];
    const dragItem = newPlaylist[dragIndex];
    newPlaylist.splice(dragIndex, 1);
    newPlaylist.splice(hoverIndex, 0, dragItem);
    setPlaylist(newPlaylist);
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      {playlist.map((video: any, index: any) => (
        <div
          key={video.id}
          className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 mb-2"
          onClick={() => handleVideoClick(index)}
          draggable={true}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", index);
          }}
          onDrop={(e) => {
            const dragIndex = Number(e.dataTransfer.getData("text/plain"));
            const hoverIndex = index;
            handleReorder(dragIndex, hoverIndex);
          }}
        >
          <div
            className="relative before:z-10 before:absolute before:left-4/5 before:-top-3 before:w-max before:max-w-xs before:-translate-x-4/5 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/4 after:-top-3 after:h-0 after:w-0 after:-translate-x-4/5 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
            data-tip="Drag to Reorder your Playlist"
          >
            <p className="text-sm">
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
