import useGenres from "../hooks/useGenre";
import Genre from "./Genre";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreSkeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  
  if(error) return null;
  return (
    <div className="h-full w-full px-3 py-4 overflow-y-auto">
      {isLoading && genreSkeletons.map(genreSkeleton => <GenreSkeleton key={genreSkeleton}/>)}
      <ul className="space-y-2 font-medium">
        {data?.map((genre) => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </ul>
    </div>
  );
};

export default GenreList;