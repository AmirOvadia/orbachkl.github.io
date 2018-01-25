function MoveRight() {
    var greenCircle = document.getElementsByClassName('greenBorder')[0];
    console.log(greenCircle);
    SwapClasses('blueBorder', 'greenBorder');
    SwapClasses('blackBorder', 'blueBorder');
    SwapClasses('redBorder', 'blackBorder');
    SwapClasses('yellowBorder', 'redBorder');

    greenCircle.classList.add('yellowBorder');
    greenCircle.classList.remove('greenBorder');
  
    
}



function MoveLeft() {
    var blueCircle = document.getElementsByClassName('blueBorder')[0];
    console.log(blueCircle);
    SwapClasses('greenBorder', 'blueBorder');
    SwapClasses('yellowBorder', 'greenBorder');
    SwapClasses('redBorder', 'yellowBorder');
    SwapClasses('blackBorder', 'redBorder');
    
    blueCircle.classList.add('blackBorder');
    blueCircle.classList.remove('blueBorder');
   
  

}


function SwapClasses(currentClass,newClass)
{
    var CurrentCircle = document.getElementsByClassName(currentClass)[0];
    CurrentCircle.classList.add(newClass);
    CurrentCircle.classList.remove(currentClass);
    
   

}