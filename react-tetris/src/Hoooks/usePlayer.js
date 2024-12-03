import { useCallback, useState } from "react";
import { randomTetrominos,TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelper";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: Math.floor(STAGE_WIDTH / 2) - 2, y: 0 },
      tetromino: randomTetrominos().shape,
      collided: false,
    });
  }, []); // No dependencies as `STAGE_WIDTH` and `randomTetrominos` are static imports.

  return [player, updatePlayerPos, resetPlayer];
};
