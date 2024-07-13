"use strict";

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    return Array.from(arr);
}

var playing = true;

var timer = function() {
    return setInterval(function() {
        var counter = document.getElementById("counter");
        var count = parseInt(counter.innerText);
        counter.innerText = count + 1;
    }, 1000);
};

var interval = timer();

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var heart = document.getElementById("heart");
var pause = document.getElementById("pause");
var commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click", function() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerText);
    counter.innerText = count - 1;
});

plus.addEventListener("click", function() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerText);
    counter.innerText = count + 1;
});

heart.addEventListener("click", function() {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerText);
    var likes = document.querySelector(".likes");
    var likeItem;

    if ([].concat(_toConsumableArray(likes.children)).map(function(child) {
        return parseInt(child.dataset.num);
    }).includes(count)) {
        likeItem = document.querySelector('[data-num="' + count + '"]');
        var likeCount = parseInt(likeItem.children[0].innerText);
        likeItem.innerHTML = count + " has been liked <span>" + (likeCount + 1) + "</span> times";
    } else {
        likeItem = document.createElement("li");
        likeItem.setAttribute("data-num", count);
        likeItem.innerHTML = count + " has been liked <span>1</span> time";
        likes.appendChild(likeItem);
    }
});

pause.addEventListener("click", function() {
    if (playing) {
        playing = false;
        clearInterval(interval);
        this.innerText = "resume";
    } else {
        playing = true;
        interval = timer();
        this.innerText = "pause";
    }

    [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(button) {
        if (button.id !== "pause") {
            button.disabled = !playing;
        }
    });
});

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var input = this.children[0];
    var comment = input.value;
    input.value = "";
    var comments = document.querySelector(".comments");
    var commentElement = document.createElement("p");
    commentElement.innerText = comment;
    comments.appendChild(commentElement);
});
