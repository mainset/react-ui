export const msDebounce = (func, delay) => {
  let inDebounce;
  return (...args) => {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
