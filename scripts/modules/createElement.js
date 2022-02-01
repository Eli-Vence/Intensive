const createElement = (tag, attrebute) => {
  const element = document.createElement(tag);
  Object.assign(element, attrebute);

  return element;
};

export default createElement;