function ShowValue() {
    var color = document.getElementsByClassName("colorsList")[0];
    var index = color.selectedIndex;
   document.body.style.backgroundColor = color.options[index].text;

}