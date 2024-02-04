export function GetDotPosition(
  value: number,
  elementSize: number,
  renderData: any[],
  columnHeight: number,
) {
  if (renderData.length > 0) {
    const arr = [...renderData];
    const dataMin = arr.sort((a, b) => a.value - b.value)[0].value;
    const dataMax = arr.sort((a, b) => b.value - a.value)[0].value;
    const range = dataMax - dataMin;
    if (range === 0) {
      return Math.round(0.5 * (columnHeight - elementSize));
    }
    const valueRange = value - dataMin;
    const position =
      arr.length > 1
        ? Math.round((valueRange / range) * (columnHeight - elementSize))
        : Math.round(0.5 * (columnHeight - elementSize));
    return position;
  } else {
    return 0;
  }
}

export function GetHeightDifference(
  item1: number,
  item2: number,
  dotSize: number,
  columnHeight: number,
  items: any[],
) {
  const height1 = GetDotPosition(item1, dotSize, items, columnHeight);
  const height2 = GetDotPosition(item2, dotSize, items, columnHeight);

  return height2 - height1;
}

export function GetAngle(
  item1: number,
  item2: number,
  dotSize: number,
  columnWidth: number,
  columnHeight: number,
  items: any[],
) {
  const height = GetHeightDifference(
    item1,
    item2,
    dotSize,
    columnHeight,
    items,
  );
  const angle =
    Math.atan(height / (columnWidth / items.length)) * (180 / Math.PI);

  return angle * -1;
}
