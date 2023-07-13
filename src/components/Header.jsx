
const Header = () => {
  return (
    <>
      <div className=" w-full flex fixed top-0 uppercase justify-center bg-[#242933] shadow-sm shadow-gray-500 z-10">
        <h1 
        onClick={() => window.scroll(0, 0)}
        className=" py-4 text-[#08D9D6] text-2xl font-montserrat ">Entertainment Zone</h1>
      </div>
    </>
  )
}

export default Header

