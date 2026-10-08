// Tabs: bosilgan tabni aktiv qilish
document.querySelectorAll('.tabs').forEach(function (tabs) {
    tabs.querySelectorAll('span').forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.querySelectorAll('span').forEach(function (t) { t.classList.remove('on'); });
            tab.classList.add('on');
        });
    });
});

// Carousel strelkalari: oldingi .row ni surish
document.querySelectorAll('.arrows').forEach(function (arrows) {
    var row = arrows.previousElementSibling;
    var btns = arrows.querySelectorAll('span');
    if (!row || btns.length < 2) return;
    btns[0].addEventListener('click', function () { row.scrollBy({ left: -360, behavior: 'smooth' }); });
    btns[1].addEventListener('click', function () { row.scrollBy({ left: 360, behavior: 'smooth' }); });
});

// Auto Loan Calculator
var loan = document.querySelector('.loan');
if (loan) {
    var inputs = loan.querySelectorAll('input');
    var button = loan.querySelector('.btn');
    var result = document.createElement('div');
    result.className = 'result';
    button.insertAdjacentElement('afterend', result);

    button.addEventListener('click', function () {
        var price = parseFloat(inputs[0].value) || 0;
        var rate = (parseFloat(inputs[1].value) || 0) / 100 / 12;
        var months = (parseFloat(inputs[2].value) || 0) * 12;
        var down = parseFloat(inputs[3].value) || 0;
        var principal = price - down;

        if (principal <= 0 || months <= 0) {
            result.textContent = 'Iltimos, to\'g\'ri qiymat kiriting.';
            return;
        }
        var monthly = rate === 0
            ? principal / months
            : principal * rate / (1 - Math.pow(1 + rate, -months));
        result.textContent = 'Oylik to\'lov: $' + monthly.toFixed(2);
    });
}

// Newsletter formasi
var signup = document.querySelector('footer .btn');
if (signup) {
    signup.addEventListener('click', function () {
        var email = signup.previousElementSibling;
        if (email && email.value.indexOf('@') > 0) {
            email.value = '';
            email.placeholder = 'Rahmat! Obuna bo\'ldingiz.';
        } else if (email) {
            email.placeholder = 'To\'g\'ri email kiriting';
        }
    });
}
