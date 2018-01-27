function ColorBackGround(circleClass) {
    var circle = document.getElementsByClassName(circleClass)[0];
    circle.classList.add('dynamic');
    console.log(circle.innerText);
   

    circle.classList.toggle('dynamic2');
    
    if (circle.innerText == "move me right!") {
        console.log("1");
        circle.innerText = "move me left!";
    }
    else {
        console.log("2");
        circle.innerText = "move me right!";
    }

        ;

}

