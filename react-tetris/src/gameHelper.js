export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

export const checkCollision = (player, stage, { x: movex, y: movey }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // Check if the current cell in the tetromino is filled
      if (player.tetromino[y][x] !== 0) {
        // Check if the move is outside the stage boundaries (y or x)
        if (
          !stage[y + player.pos.y + movey] || // Check if row exists
          !stage[y + player.pos.y + movey][x + player.pos.x + movex] || // Check if column exists
          stage[y + player.pos.y + movey][x + player.pos.x + movex][1] !== 'clear' // Check if cell is occupied
        ) {
          return true; // Collision detected
        }
      }
    }
  }
  return false; // No collision
};
