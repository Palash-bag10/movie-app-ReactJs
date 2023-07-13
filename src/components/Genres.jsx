
import axios from 'axios'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Genres = ({genres, setGenres, setSelectedGenres, selectedGenres, setPage, type}) => {

    const fetchGenresData = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`);

        setGenres(data.genres);
    };
    // console.log(genres);


    useEffect(() => {
        fetchGenresData();
        // Unmounting
        return () => {
            setGenres({});
        }
    }, []);

    function genresAdd(genre) {
        setSelectedGenres([...selectedGenres, genre]);
        // eslint-disable-next-line react/prop-types
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    function genresRemove(genre) {
        // eslint-disable-next-line react/prop-types
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        // eslint-disable-next-line react/prop-types
        setPage(1);
    }

  return (
    <>
      <div className=' w-full mx-auto flex flex-wrap space-x-4 gap-y-2 py-2 mt-2 justify-center font-montserrat '>
            {/* // eslint-disable-next-line react/prop-types */}
            { selectedGenres.map((genre) => (
                // eslint-disable-next-line react/jsx-key
                <button
                className=' text-blue-400'
                key={genre.id}
                onClick={() => genresRemove(genre)}
                > 
                    {genre.name} 
                </button>
            )) }

            { genres.map((genre) => (
                // eslint-disable-next-line react/jsx-key
                <button
                className=" text-slate-300"
                key={genre.id}
                onClick={() => genresAdd(genre)}> 
                    {genre.name} 
                </button>
            )) }
      </div>
    </>
  )
}

export default Genres
