const decodeTheRing = function (s, p) {

    // s: the input string (message)
    // p: the pattern (decoder key)

    // dp[i][j] will be true if s[0...i-1] matches p[0...j-1]
    const dp = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));

    // Empty pattern matches an empty string
    dp[0][0] = true;

    // Handle cases where the pattern starts with '*'
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];  // '*' can match empty string
        }
    }

    // Fill the dp table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];  // Match a single character or question mark
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];  // '*' can match zero or more characters
            }
        }
    }

    return dp[s.length][p.length];
};

  
  module.exports = decodeTheRing;