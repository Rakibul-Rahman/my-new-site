const sliderCard = document.getElementById("slider-card");
const dots = document.querySelectorAll('.slider-indicators li');


document.querySelector('.carousel-indicators').addEventListener('click', function (e) {
    var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (target !== currentItem && target < dots.length) {
        goToItem(target);
    }
});
