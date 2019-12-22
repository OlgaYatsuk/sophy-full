const $aboutSlider = $('.js-about-slider');

$aboutSlider.slick({
  infinite: true,
  nextArrow: '<button class="arrow arrow--next"><svg width="100" height="48" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
  '<rect x="1" y="1" width="98" height="46" rx="23" stroke="#DA714D" stroke-width="2"/>\n' +
  '<path d="M65 27L59 21V24H36.5V27H65Z" fill="#DA714D"/>\n' +
  '</svg>\n</button>',
  prevArrow: `<button class="arrow arrow--prev"><svg width="100" height="48" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="98" height="46" rx="23" stroke="#DA714D" stroke-width="2"/>
    <path d="M36 27L42 21V24H64.5V27H36Z" fill="#DA714D"/>
  </svg></button>`,
  fade: true,
});

$aboutSlider.on('afterChange', setIndex);

setIndex();

function setIndex() {
  const slideLength = $('.slide').length;
  const currentSlide = $aboutSlider.slick('slickCurrentSlide') + 1;

  $('.js-current-slide').text(`0${currentSlide}`);

  $('.js-slides-count').text(`0${slideLength}`);
}
