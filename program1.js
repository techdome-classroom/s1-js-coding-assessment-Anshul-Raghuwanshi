const getTotalIsles = function (grid) {

  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (r, c) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 'L') {
          return;
      }
      grid[r][c] = 'W';
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
  };

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
};

const map1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

const map2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"],
];

console.log(getTotalIsles(map1)); // Output: 1
console.log(getTotalIsles(map2)); // Output: 3

module.exports = getTotalIsles