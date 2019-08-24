const asSVG = (
  {
    fill: defaultFill,
    fillBackground: defaultFillBackground,
    height: defaultHeight,
    width: defaultWidth,
  },
  path,
) => ({
  fill = defaultFill,
  fillBackground = defaultFillBackground,
  height = defaultHeight,
  width = defaultWidth,
} = {}) => (
  path
    .replace(/%SVGMaker--fill/g, fill)
    .replace(/%SVGMaker--fillBackground/g, fillBackground)
    .replace(/%SVGMaker--height/g, height)
    .replace(/%SVGMaker--width/g, width)
);

export default asSVG;
