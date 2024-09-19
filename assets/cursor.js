document.addEventListener('mousemove', function(e) {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');

    bigBall.style.transform = `translate(${e.pageX - 15}px, ${e.pageY - 15}px)`;
    smallBall.style.transform = `translate(${e.pageX - 5}px, ${e.pageY - 7}px)`;
});

const hoverables = document.querySelectorAll('.hoverable');

hoverables.forEach(element => {
    element.addEventListener('mouseenter', function() {
        document.querySelector('.cursor__ball--big').style.transform = 'scale(4)';
    });

    element.addEventListener('mouseleave', function() {
        document.querySelector('.cursor__ball--big').style.transform = 'scale(1)';
    });
});
