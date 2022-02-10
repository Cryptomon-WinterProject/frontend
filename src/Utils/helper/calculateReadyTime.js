export const calculateReadyTime = (readyTime) => {
  const timeLeft = Math.floor((readyTime - Date.now() / 1000) / 60);
  return timeLeft;
};
