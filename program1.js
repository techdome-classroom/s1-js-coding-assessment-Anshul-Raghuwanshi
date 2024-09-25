const getTotalIsles = function (grid) {


  if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const dfs = (i, j) => {
        // Boundary checks and if it's water ('W'), return
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') return;

        // Mark this land as visited by setting it to 'W'
        grid[i][j] = 'W';

        // Visit all 4 adjacent positions (up, down, left, right)
        dfs(i - 1, j); // up
        dfs(i + 1, j); // down
        dfs(i, j - 1); // left
        dfs(i, j + 1); // right
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                count++;
                dfs(i, j); // Explore the whole island and mark it visited
            }
        }
    }

    return count;
};

module.exports = getTotalIsles