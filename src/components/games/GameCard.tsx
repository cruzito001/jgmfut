import React, { useState } from "react";
import type { GameData } from "../../data/games";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import styles from "./Games.module.css";

interface GameCardProps {
  game: GameData;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          src={`/${game.logoSrc}`}
          alt={game.title}
          className={styles.cardImage}
        />
        <h2 className={styles.cardTitle}>{game.title}</h2>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.description}>{game.description}</p>
        <div className={styles.meta}>
          <span className={styles.version}>Version: {game.version}</span>
          {game.downloadLink && (
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              <Download size={18} style={{ marginRight: "8px" }} />
              Download
            </a>
          )}
        </div>
        <div>
          <h3 className={styles.featuresTitle}>Key Features:</h3>
          <ul className={styles.featuresList}>
            {game.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.featureBullet}></span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          {game.allFeatures && game.allFeatures.length > 0 && (
            <>
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className={styles.toggleButton}
              >
                {showAllFeatures ? (
                  <>
                    <ChevronUp size={20} style={{ marginRight: "4px" }} />
                    Hide All Features
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} style={{ marginRight: "4px" }} />
                    Show All Features
                  </>
                )}
              </button>
              {showAllFeatures && (
                <ul className={styles.allFeaturesList}>
                  {game.allFeatures.map((feature, index) => (
                    <li key={index} className={styles.allFeaturesItem}>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
