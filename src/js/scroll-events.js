const $visibleItem = $('.js-visible');
const $window = $(window);

$(function() {
  initVisible();
  $window.on('scroll', initVisible);
});

function initVisible() {

  $visibleItem.each(function() {
    let $this = $(this);
    let isVisible = $(this)[0].getBoundingClientRect().top;

    if(isVisible <= $window.height()) {
      $this.addClass('is-visible');
    }
  });
}

export { initVisible };
