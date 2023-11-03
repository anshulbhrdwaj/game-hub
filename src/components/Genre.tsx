import { Genres } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genres;
  onSelectGenre: (genre: Genres) => void;
}

const Genre = ({ genre, onSelectGenre }: Props) => {
  return (
    <li>
      <button
        onClick={() => onSelectGenre(genre)}
        className="flex justify-start items-center p-2 rounded-lg text-white hover:bg-slate-500 dark:hover:bg-blue-600 group w-full"
      >
        <img
          className="w-8 h-8 object-cover rounded-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          src={getCroppedImageUrl(genre.image_background)}
        />
        <a className="ml-3">{genre.name}</a>
      </button>
    </li>
  );
};

export default Genre;
