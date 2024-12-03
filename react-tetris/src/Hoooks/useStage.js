import { useEffect, useState, useCallback } from "react";
import { createStage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  const updateStage = useCallback(
    (prevStage) => {
      // Clear the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Draw the player's tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      return newStage;
    },
    [player.collided, player.pos.x, player.pos.y, player.tetromino]
  );

  useEffect(() => {
    setStage((prev) => updateStage(prev));
  }, [player, updateStage]);

  return [stage, setStage];
};
