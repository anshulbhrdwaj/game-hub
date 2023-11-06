import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery 
}

const GameHeading = ({gameQuery}: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <h1 className="text-5xl text-white font-bold">
      {heading}
    </h1>
  )
}

export default GameHeading