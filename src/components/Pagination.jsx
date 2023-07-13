

// eslint-disable-next-line react/prop-types
const Pagination = ({page, setPage, totalPage}) => {

  function changePageHandler(changePage){
    setPage(changePage)
    window.scroll(0, 0)
  }

  return (
    <>
     <div className=" inset-x-0 flex justify-center items-center">
        <div className="w-11/12 max-w-2xl flex items-center justify-center">
          <div className="flex gap-x-4">
               {page > 1 && 
                (<button
                className=" font-montserrat text-slate-100" 
                  onClick={() => changePageHandler(page - 1)}
                  >BACK</button>
                )
               }

               <p
               className=" font-montserrat text-slate-100"
               >{page} of <span className=" text-blue-500">{totalPage}</span></p>

               { page < totalPage &&
                 ( <button
                 className=" font-montserrat text-slate-100"
                 onClick={() => changePageHandler(page + 1)}
                 >Next</button> )
                }
          </div>
        </div>
     </div> 
    </>
  )
}

export default Pagination
