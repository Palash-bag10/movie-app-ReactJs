import axios from "axios"
import { useEffect, useState } from "react"
import SingleContent from "../components/SingleContent";
import Pagination from "../components/Pagination";
import Genres from "../components/Genres";
import useGenres from "../hooks/useGenres";


const Series = () => {

  const [page, setPage] = useState(1);
  const [seriesContent, setSeriesContent] = useState([]);
  const [totalPage, setTotalPage] = useState(null); 
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchTvSeriesData = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

    // console.log(data)
    setSeriesContent(data.results);
    setTotalPage(data.total_pages);
  }

  useEffect(() => {
    fetchTvSeriesData();
  },[page, genreforURL]);


  return (
    <>
     <div className=" w-full">
        <span className=" flex justify-center text-white font-montserrat uppercase p-2 text-[5vw] md:text-[2.5vw]">TV Series</span>

        <Genres type="tv" genres={genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage} />

        <div className="trending__content w-11/12 flex flex-wrap justify-around mx-auto py-5">
          {
            seriesContent && 
            seriesContent.map((singleContentData) => (
              <SingleContent 
                key={singleContentData.id}
                id={singleContentData.id}
                poster={singleContentData.poster_path}
                title={singleContentData.title || singleContentData.name}
                date={singleContentData.release_date || singleContentData.first_air_date}
                mediaType="tv"
                rating={singleContentData.vote_average}
              />
            ))
          }
        </div>

        
        <Pagination setPage={setPage} totalPage={totalPage} page={page}/>

     </div>  
    </>
  )
}

export default Series;
