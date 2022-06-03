const getRandomInt = (min: number, max: number):number => {
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.trunc(max);
  const randomFloat = Math.random();
  return Math.trunc(randomFloat * (max - min + 1)) + min;
};

const getRandomValueFromArr = <T>(arr: T[]): T => {
  const randomValue = arr[getRandomInt(0, arr.length - 1)];
  if (typeof randomValue === 'object') {
    return { ...randomValue };
  }
  return randomValue;
};

export { getRandomInt, getRandomValueFromArr };
