var rotateVal = 0;
        var InterVal // 定时器

function rotate () {
    InterVal = setInterval(function () {
    var img = document.getElementById('img')
    rotateVal += 2
    img.style.transform = 'rotate(' + rotateVal + 'deg)'
    img.style.transition = '0.1s linear'
}, 100)
};
rotate();