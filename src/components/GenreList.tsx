import useGenres, { Genres } from "../hooks/useGenre";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {data?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
