import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery 
}

const GameHeading = ({gameQuery}: Props) => {
  return (
    <h1 className="text-5xl text-white font-bold">
      {gameQuery.platform?.name} {' '}
      {gameQuery.genre?.name} {' '}
      Games
    </h1>
  )
}

export default GameHeading