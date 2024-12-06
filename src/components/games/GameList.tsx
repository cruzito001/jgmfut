import React from "react";
import { games } from "../../data/games";
import type { GameData } from "../../data/games";
import GameCard from "./GameCard";
import styles from "./Games.module.css";

interface GameListProps {
  newModTitles?: string[];
  title: string;
}

const GameList: React.FC<GameListProps> = ({ newModTitles, title }) => {
  const displayedGames = newModTitles
    ? games.filter((game) => newModTitles.includes(game.title))
    : games;

  console.log(
    "Filtered games:",
    displayedGames.map((game) => game.title)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {displayedGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
