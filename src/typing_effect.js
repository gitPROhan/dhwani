const target = document.querySelectorAll('.typing-text');

target.forEach((element) => {
    const text = element.getAttribute('data-text');
    let index = 0;

    function type() {
        element.innerHTML += text[index];
        index++;

        if (index >= text.length) {
            clearInterval(typingInterval);
        }
    }

    const typingInterval = setInterval(type, 100);
});

const image = document.querySelector('#a1');
let scale = 1;
let growing = true;

setInterval(() => {
    if (growing) {
        scale += 0.01;
    } else {
        scale -= 0.01;
    }

    if (scale >= 1.2) {
        growing = false;
    } else if (scale <= 1) {
        growing = true;
    }

    image.style.transform = `scale(${scale})`;
}, 50);

function submitReview() {
    var username = document.getElementById("username").value;
    var review = document.getElementById("review").value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var reviewObj = {
        "username": username,
        "review": review,
        "rating": rating
    };

    var reviewsTable = document.getElementById("reviewsTable");
    var newRow = reviewsTable.insertRow(-1);
    var usernameCell = newRow.insertCell(0);
    var reviewCell = newRow.insertCell(1);
    var ratingCell = newRow.insertCell(2);
    usernameCell.innerHTML = reviewObj.username;
    reviewCell.innerHTML = reviewObj.review;
    ratingCell.innerHTML = reviewObj.rating;
};

var countDownDate = new Date("Jun 30, 2023 00:00:00").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
