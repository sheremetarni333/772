document.querySelectorAll('.like-count').forEach(function (item, i) {
    item.innerHTML = Math.trunc((document.querySelectorAll('.like-count').length * 50) - ((i + 1) * Math.log((i + 1) * 1000)) - ((i + 10) * document.querySelectorAll('.like-count').length / (i + 5)));
});

var dayNames = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
var monthNames = new Array('Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November','Dezember');
var now = new Date();
var timeMainComment = new Date(now);
var timeReply = new Date(now);
timeMainComment.setMinutes(timeMainComment.getMinutes() - 22);
timeReply.setMinutes(timeReply.getMinutes() - 47);



document.querySelectorAll('.dateFull').forEach(function (fulldate) {
    fulldate.innerHTML = dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
});


// Closable user reviews
var reviewsContainer = document.querySelector('.extra-testimonials');
var reviewsContainerInner = document.querySelector('.testimonials-container');
var reviewsCloseBtn = document.querySelector('.extra-testimonials h1 a');
var heightHelper;
var heightHelper2;

// Set the reviews container height after the page is rendered
window.onload = function () {
    heightHelper = reviewsContainerInner.offsetHeight + reviewsContainerInner.style.paddingTop + reviewsContainerInner.style.paddingBottom;
    reviewsContainer.style.height = heightHelper + 'px';
    reviewsCloseBtn.style.opacity = '1';
};

// Resize the reviews container when a viewport change occurs
window.addEventListener('resize', function () {
    if (reviewsContainer.style.height != '0px') {
        heightHelper2 = reviewsContainerInner.offsetHeight + reviewsContainerInner.style.paddingTop + reviewsContainerInner.style.paddingBottom;
        if (heightHelper2 != heightHelper) {
            reviewsContainer.style.height = heightHelper2 + 'px';
            heightHelper = heightHelper2;
        }
    }
});

// Close button for the reviews container
reviewsCloseBtn.addEventListener('click', function (item) {
    item.preventDefault();
    reviewsContainer.style.height = '0px';
    reviewsContainer.style.opacity = '0';
});

// });;


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    var rand = Math.floor(Math.random() * (15 - 5) + 5);
    $('.data-end-place').text(rand)
    $('.data-end-scr').text(today)
