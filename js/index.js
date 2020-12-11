const images = [
  {
    url:
      './images/header/slider/beautiful-redhead-girl-with-freckles-smiling 2.jpg',
  },

  {
    url:
      './images/header/slider/beautiful-redhead-girl-with-freckles-smiling 3.jpg',
  },
  {
    url:
      './images/header/slider/beautiful-redhead-girl-with-freckles-smiling 4.jpg',
  },
  {
    url:
      './images/header/slider/beautiful-redhead-girl-with-freckles-smiling 5.jpg',
  },
];

refs = {
  leftBtn: document.querySelector('.js-nav-left'),
  rightBtn: document.querySelector('.js-nav-right'),
  //   sliderImage: document.querySelector('.slider-image'),
};

console.dir(refs.sliderImage);

function sliderCreate() {
  const i = 0;
  const markup = images
    .map(({ url }) => {
      `<img src=${url} class="slider-image" alt="slider image" data-index=${(i += 1)}></img>`;
    })
    .join('');

  return markup;
}

refs.leftBtn.addEventListener('click', () => {
  console.log('click');
});

refs.rightBtn.addEventListener('click', () => {
  console.log('click');
});
