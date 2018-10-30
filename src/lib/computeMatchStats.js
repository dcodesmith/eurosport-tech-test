export default matches => {
  if (!matches || !Array.isArray(matches)) {
    throw new Error('Array expected');
  }

  const WON = 1;
  const wins = matches.filter(match => match === WON).length;
  const losses = matches.length - wins;
  
  return { wins, losses };
};
