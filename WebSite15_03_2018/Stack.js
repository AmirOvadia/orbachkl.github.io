function Push() {
    var valueStr= prompt("enter value");
    var value = parseInt(valueStr);
    var stack = document.getElementsByClassName("stack")[0];
    var elementsInStack = stack.classList;
    var elementDiv = document.createElement('div');
    elementDiv.className = 'element';
    elementDiv.innerText = value;
    stack.appendChild(elementDiv);
    stack.insertBefore(elementDiv, stack.childNodes[0]);
    var lastCall = document.getElementsByClassName("txtLastCall")[0];
    lastCall.value ="push: "+value;

}
function Pop() {
    var stack = document.getElementsByClassName("stack")[0];
    if (stack.childNodes.length > 1) {
        var value = stack.childNodes[0].textContent;
        stack.removeChild(stack.childNodes[0]);
        var lastCall = document.getElementsByClassName("txtLastCall")[0];
        lastCall.value = "pop: " + value;
    }

}
function Top() {
    var stack = document.getElementsByClassName("stack")[0];
    if (stack.childNodes.length > 1) {
        var value = stack.childNodes[0].textContent;
        var lastCall = document.getElementsByClassName("txtLastCall")[0];
        lastCall.value = "top: " + value;
    }
}