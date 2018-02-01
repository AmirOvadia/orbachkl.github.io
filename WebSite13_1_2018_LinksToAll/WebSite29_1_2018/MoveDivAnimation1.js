

var id, id2;

var left = 0;

function animate_forward() {
    left++;
    var elem = document.getElementsByClassName('dynamic')[0];
    elem.style.left = left + 'px'; // show frame
    if (left <= 764) {
        id = setTimeout("animate_forward()", 1);
    }
    else {
        id = clearTimeout(id);
        animate_backward();
    }
    document.getElementsByClassName("movement")[0].innerHTML = "forward!";
}

function animate_backward() {
    left--;
    var elem = document.getElementsByClassName('dynamic')[0];
    elem.style.left = left + 'px'; // show frame
    if (left >= 0) {
        id2 = setTimeout("animate_backward()", 1);
    }
    else {
        id2 = clearTimeout(id2);
        animate_forward();
    }
    document.getElementsByClassName("movement")[0].innerHTML = "backward!";
}

//window.onload = function () {
//    animate_forward();
//}

