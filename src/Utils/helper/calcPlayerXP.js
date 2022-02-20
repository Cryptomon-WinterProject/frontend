export const calculatePlayerXP = (winCount, level) => {
  if (!winCount) {
    return 0;
  }
  winCount = parseInt(winCount);
  level = parseInt(level);
  const xp = Math.floor(
    ((winCount * 100) / (100 + winCount) + 1 - level) * 100
  );
  return xp;
};
