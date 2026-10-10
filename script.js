document.querySelectorAll('.arrows').forEach(function (arrows) {
    var row = arrows.previousElementSibling;
    var btns = arrows.querySelectorAll('span');
    if (!row || btns.length < 2) return;
    btns[0].addEventListener('click', function () { row.scrollBy({ left: -360, behavior: 'smooth' }); });
    btns[1].addEventListener('click', function () { row.scrollBy({ left: 360, behavior: 'smooth' }); });
});
