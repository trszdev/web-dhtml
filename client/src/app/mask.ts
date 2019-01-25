

export const pad = (number, width, filler = '0') => {
  const n = number + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(filler) + n;
}

export const padRight = (number, width, filler = '0') => {
  const n = number + '';
  return n.length >= width ? n : n + new Array(width - n.length + 1).join(filler);
}

export const splitGroups = (val, indeces) => {
  const result = [];
  let part = '';
  for (let i = 0; i < val.length; i++) {
    part += val[i];
    if (indeces.includes(i)) {
      result.push(part);
      part = '';
    }
  }
  result.push(part);
  return result;
}