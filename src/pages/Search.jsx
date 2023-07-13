import axios from "axios";
import { useState, useEffect } from "react"
import {BiSearch} from "react-icons/bi"
import Pagination from "../components/Pagination";
import SingleContent from "../components/SingleContent";


const Search = () => {

  const [type, setType] = useState(0);
  const [searchContent, setSearchContent] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null); 
  const [content, setContent] = useState([]);

  const fetchSearchData = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${searchContent}&page=${page}&include_adult=false`);

    setContent(data.results);
    setTotalPage(data.total_pages);
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearchData();
  },[type, page]);

  return (
    <>
      <div className=" w-full">
        <div className=" w-[330px] flex justify-center items-center mx-auto my-4 gap-x-3 font-montserrat">

          <input 
          type="text"
          placeholder="Search Here"
          onChange={(e) => setSearchContent(e.target.value)}
          className=" w-full outline-none py-1 px-2 rounded-md bg-[#9db2bf32] text-[#EEEEEE] border-b border-b-[#08D9D6]"
          />
          <button 
          onClick={fetchSearchData}
          className=" bg-slate-200 p-2 rounded-full">
            <BiSearch fontSize={20}/>
          </button>

        </div>

        <div className=" w-full max-w-sm flex justify-evenly items-center mx-auto gap-x-6 font-montserrat">
          
          <button
            className={`${type === 0 ? "border-b border-b-[#08D9D6]" : " border-none"} text-[#c1c1c1] font-medium transition-all duration-200`}
            value={type}
            onClick={() =>  setType(0)}
          >
            <p>Search Movie</p>
          </button>
          <button
            className= {`${type === 1 ? "border-b border-b-[#08D9D6]" : " border-none"}  text-[#c1c1c1] font-medium`}
            onClick={() =>  setType(1)}
          >
            <p>Search TV Series</p>
          </button>
          
        </div>

        <div className="trending__content w-11/12 flex flex-wrap justify-around mx-auto py-5">
          {
            content && 
            content.map((singleContentData) => (
              <SingleContent 
                key={singleContentData.id}
                id={singleContentData.id}
                poster={singleContentData.poster_path}
                title={singleContentData.title || singleContentData.name}
                date={singleContentData.release_date || singleContentData.first_air_date}
                mediaType={type ? "tv" : "movie"}
                rating={singleContentData.vote_average}
              />
            ))
          }

          {searchContent && !content &&
            ( type ? <h2>No TV Series found</h2> : 
                      <h2>No Movies found</h2> )
          }
        </div>

        {/* PENDING PAGINATION */}
        { totalPage > 1 &&
          ( <Pagination setPage={setPage} totalPage={totalPage} page={page}/> )
         }

      </div> 
    </>
  )
}

export default Search
