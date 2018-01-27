function ColorBackGround(circleClass) {
    var circle = document.getElementsByClassName(circleClass)[0];
    circle.classList.add('dynamic');
    console.log(circle.classList);
    console.log(circle.classList[1]);

   


    switch (circle.classList[1]) {
        case 'circle1':
            circle.classList.toggle('blue');
            break;
        case 'circle2':
            circle.classList.toggle('black');
            break;
        case 'circle3':
            circle.classList.toggle('red');
            break;
        case 'circle4':
            circle.classList.toggle('yellow');
            break;
        case 'circle5':
            circle.classList.toggle('green');
            break;
    }
    circle.classList.toggle('whiteTextColor');

}

