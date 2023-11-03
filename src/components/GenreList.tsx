import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
