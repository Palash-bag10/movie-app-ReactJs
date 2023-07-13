import {FiTrendingUp} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
import {MdMovie, MdOndemandVideo} from "react-icons/md"
import { Link } from "react-router-dom"

const MainNav = () => {
  return (
    <>
     <div className=" inset-x-0 flex fixed bottom-0 justify-between mx-auto bg-[#242933] border-t-2 border-gray-600 z-10">
       <div className=" w-11/12 max-w-2xl flex items-center justify-between mx-auto">
          <Link to="/">
            <div className=" text-white items-center justify-center flex flex-col">
              <FiTrendingUp/>
              <p className=" text-[12px] font-montserrat">Trending</p>
            </div>
          </Link>
          <Link to="/movies">
            <div className="text-white items-center justify-center flex flex-col px-4 py-2">
              <MdMovie/>
              <p className=" text-[12px] font-montserrat">Movies</p>
            </div>
          </Link>
          <Link to="/series">
            <div className="text-white items-center justify-center flex flex-col px-4 py-2">
              <MdOndemandVideo/>
              <p className=" text-[12px] font-montserrat">TV Series</p>
            </div>
          </Link>
          <Link to="/search">
            <div className="text-white items-center justify-center flex flex-col px-4 py-2">
              <AiOutlineSearch/>
              <p className=" text-[12px] font-montserrat">Search</p>
            </div>
          </Link>
       </div>
     </div> 
    </>
  )
}

export default MainNav
