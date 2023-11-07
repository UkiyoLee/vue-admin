interface RandomRange {
  start?: number;
  end: number;
}

export function random(range?: RandomRange, round?: boolean) {
  const { start = 0, end } = range || { end: 1 };

  const randomNumber = Math.random() * (end - start + 1);
  if (!round) {
    return randomNumber + start;
  }
  return Math.floor(randomNumber) + start;
}