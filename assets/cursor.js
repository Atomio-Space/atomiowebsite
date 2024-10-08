// cursor-animation.js
document.addEventListener('DOMContentLoaded', () => {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  const $hoverables = document.querySelectorAll('.hoverable');

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove);
  $hoverables.forEach(hoverable => {
    hoverable.addEventListener('mouseenter', onMouseHover);
    hoverable.addEventListener('mouseleave', onMouseHoverOut);
  });

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.pageX - 15,
      y: e.pageY - 15
    });
    TweenMax.to($smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7
    });
  }

  // Hover an element
  function onMouseHover() {
    TweenMax.to($bigBall, .3, {
      scale: 4
    });
  }

  function onMouseHoverOut() {
    TweenMax.to($bigBall, .3, {
      scale: 1
    });
  }
});
