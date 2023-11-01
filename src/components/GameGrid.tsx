import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";


const GameGrid = () => {
  const {error, games} = useGames();

  return (
    <>
      <ul>
        {/* {error && <p>{error}</p>} */}
        {error ? (
          <p>{error}</p>
        ) : (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        )}
      </ul>
    </>
  );
};

export default GameGrid;
