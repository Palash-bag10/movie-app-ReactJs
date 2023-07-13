import React, { useState } from "react"
import { img_300, unavailable } from "../config/config"
import MovieModal from "./MovieModal";

const SingleContent = ({id, poster, title, date, mediaType, rating}) => {

  const [isOpen, setIsOpen] = useState(false);

  function onOpen(){
    setIsOpen(true);
  }

  function onClose(){
    setIsOpen(false);
  }


  return (
    <>
      <div 
      onClick={onOpen}
      className="movie__card relative w-[200px] flex flex-col bg-[#393E46] p-2 my-1 mb-4 px-4 rounded-md font-montserrat hover:scale-110 transition duration-300 ease-in">
        <div className="movie__poster">
            <img src={ poster ? `${img_300}/${poster}` : unavailable} alt={title} />
        </div>
        <div className="movie__name w-full flex justify-center items-center text-white mt-1">
            <p> {title} </p>
        </div>
        <div className="type__and__date w-full flex justify-between items-center text-white text-xs mt-2">
            <p> {mediaType === "tv" ? "TV Series" : "Movie"} </p>
            <p> {date} </p>
        </div>
        <div className=" absolute -top-1 right-0 bg-green-400 px-1 rounded-md">
            <p className="text-xs"> 
            {rating.toFixed(1)} </p>
        </div>

      </div>
      <MovieModal 
        mediaType={mediaType} 
        isOpen={isOpen} 
        onClose={onClose}
        id={id}
        />
         
    </>
  )
}

export default SingleContent
