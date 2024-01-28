const ScrollTo = (id) => {
  const element = document.querySelector(id);
  element.scrollIntoView({
    behavior: 'smooth',
  });
};

export default ScrollTo;
