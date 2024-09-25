const decodeTheRing = function (s, p) {

  const decodeTheRing = function (s, p) {
    const isMatch = (i, j) => {
        // If both string and pattern are fully processed, it's a match
        if (i >= s.length && j >= p.length) return true;

        // If pattern is exhausted but string isn't, or vice versa, no match
        if (j >= p.length) return false;

        // Handle star (*) in the pattern
        if (p[j] === '*') {
            // Try two things:
            // 1. Skip the star and move forward in the pattern
            // 2. Use the star to match one character in the string and continue
            if (isMatch(i, j + 1)) return true; // skip *
            if (i < s.length && isMatch(i + 1, j)) return true; // use * to match a character
        }

        // Handle question mark (?) or exact character match
        if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
            return isMatch(i + 1, j + 1);
        }

        // If no conditions are met, return false
        return false;
    };

    return isMatch(0, 0);
};

module.exports = decodeTheRing;
  
  module.exports = decodeTheRing;