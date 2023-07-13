import axios from "axios"
import { useEffect, useState } from "react"
// import {AiFillCloseCircle} from "react-icons/ai"
import {BsFillPlayBtnFill} from "react-icons/bs"
import { unavailable, img_500, unavailableLandscape } from "../config/config";

// eslint-disable-next-line react/prop-types
const MovieModal = ({isOpen, onClose, mediaType, id}) => {

    const [modalContent, setModalContent] = useState();
    const [video, setVideo] = useState();

    
    const fetchModalContentData = async () => {
        
        const {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);

        setModalContent(data);
    }

    const fetchVideoData = async () => {
        
        const {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);

        console.log(data)
        setVideo(data.results[0]?.key);
    }

    useEffect(() => {
        fetchModalContentData();
        fetchVideoData();
    }, [])

  return (
    <>
      {isOpen && (
        <>
            <div className=" absolute z-50 h-[80%] w-[90%] bg-[#526D82] mx-auto p-4 top-[10%] overflow-x-hidden">
                {modalContent && (
                    <>
                        <div className=" h-full flex md:flex-row flex-col gap-7 ">
                            <div className="  flex justify-center items-center ">
                                <img 
                                    className="
                                    object-contain md:flex hidden"
                                    src={modalContent.poster_path ? 
                                        `${img_500}/${modalContent.poster_path}` : unavailable} alt={modalContent.title || modalContent.name}/>

                                <img 
                                    className=" md:hidden flex object-contain "
                                    src={modalContent.backdrop_path ? 
                                        `${img_500}/${modalContent.backdrop_path}` : unavailableLandscape} alt={modalContent.title || modalContent.name} />
                            </div>

                            <div className=" md:w-[95%] md:h-[90%] w-[100%] h-full flex flex-col justify-evenly md:p-[10px] p-0">
                                <span className=" md:text-[3.5vw] text-[19px] h-[12%] flex items-center justify-center font-montserrat text-white ">
                                    {modalContent.name || modalContent.title} ({(modalContent.first_air_date || modalContent.release_date || "......").substring(0, 4)})
                                </span>

                                {modalContent.tagline && (
                                    <i className=" pb-[10px] self-center font-montserrat font-medium text-white">{modalContent.tagline}</i>
                                )}

                                <span className=" md:flex md:h-[40%]  md:p-[15px] text-justify font-montserrat text-white text-[15px] ">
                                    {modalContent.overview}
                                </span>

                                {/* crousal */}
                                <div className=" carousel">

                                </div>

                                <button className=" bg-green-500 rounded-md">
                                    <a 
                                    className="flex justify-center items-center gap-2 py-2 text-white font-montserrat font-semibold "
                                    href={`https://www.youtube.com/watch?v=${video}`}
                                    target="__blank">
                                        <BsFillPlayBtnFill/>   
                                        Watch the Trailer
                                    </a>
                                </button>
                            </div>

                        </div>
                    </>
                )}
            </div>
            <div
            onClick={onClose}
            className=" h-screen w-screen overflow-hidden  backdrop-blur absolute top-0 bottom-0 left-0 right-0  z-10"/>
        </>
      )}
    </>
  )
}

export default MovieModal
