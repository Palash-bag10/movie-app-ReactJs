const useGenres = (selectedGenres) => {
    if( selectedGenres.length < 1 ) return "";

    const genreIds = selectedGenres.map((gid) => gid.id);
    return genreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenres;


