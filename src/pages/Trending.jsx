import axios from "axios";
import { useEffect, useState } from "react"
import SingleContent from "../components/SingleContent";
import Pagination from "../components/Pagination";

const Trending = () => {

  const [trendingContent, setTrendingContent] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(null);

  const fetchTrendingData = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`);
    
      // console.log(data)
      setTrendingContent(data.results);
      setPage(data.page);
      setTotalPage(data.total_pages);
  };

  useEffect(()=>{
    fetchTrendingData();
  }, [page]);

  

  return (
    <>
     <div className=" w-full">
        <span className=" flex justify-center text-white font-montserrat uppercase p-2 text-[5vw] md:text-[2.5vw]">Trending Noww</span>
        <div className="trending__content w-11/12 flex flex-wrap justify-around mx-auto py-5">
          {
            trendingContent && 
            trendingContent.map((singleContentData) => (
              <SingleContent 
                key={singleContentData.id}
                id={singleContentData.id}
                poster={singleContentData.poster_path}
                title={singleContentData.title || singleContentData.name}
                date={singleContentData.release_date || singleContentData.first_air_date}
                mediaType={singleContentData.media_type}
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

export default Trending;
