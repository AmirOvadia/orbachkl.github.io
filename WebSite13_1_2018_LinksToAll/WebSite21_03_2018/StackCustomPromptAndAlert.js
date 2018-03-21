function Push(value) {

    var stack = document.getElementsByClassName("stack")[0];
    var elementsInStack = stack.classList;
    var elementDiv = document.createElement('div');
    elementDiv.className = 'element';
    elementDiv.innerText = value;
    stack.appendChild(elementDiv);
    stack.insertBefore(elementDiv, stack.childNodes[0]);
    var lastCall = document.getElementsByClassName("txtLastCall")[0];
    lastCall.value = "push: " + value;

}
function Pop() {
    var stack = document.getElementsByClassName("stack")[0];
    if (stack.childNodes.length > 1) {
        var value = stack.childNodes[0].textContent;
        stack.removeChild(stack.childNodes[0]);
        var lastCall = document.getElementsByClassName("txtLastCall")[0];
        lastCall.value = "pop: " + value;
    }
    else {
        Alert.render("stack is empty");
    }
}
function Top() {
    var stack = document.getElementsByClassName("stack")[0];
    if (stack.childNodes.length > 1) {
        var value = stack.childNodes[0].textContent;
        var lastCall = document.getElementsByClassName("txtLastCall")[0];
        lastCall.value = "top: " + value;
    }
    else {
        Alert.render("Stack is empty");
    }
}

var Prompt = new CustomerPrompt();
var Alert = new CustomerAlert();


function CustomerPrompt() {
    this.render = function (dialog) {
        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;

        var dialogOverlay = document.getElementsByClassName("dialogOverlay")[0];
        var dialogBox = document.getElementsByClassName("dialogBox")[0];


        dialogOverlay.style.display = "block";
        dialogOverlay.style.height = winHeight + "px";
        dialogBox.style.display = "block";
        dialogBox.style.top = "100px";
        dialogBox.style.left = (winWidth / 2) - (550 / 2) + "px";

        var dialogBoxHead = document.getElementsByClassName("dialogBoxHead")[0];
        var dialogBoxBody = document.getElementsByClassName("dialogBoxBody")[0];
        var dialogBoxFoot = document.getElementsByClassName("dialogBoxFoot")[0];

        var strDialogBoxFootHTML = '<input type="button" class="btnOK" value="OK" onclick="Prompt.ok()"/> ';
        strDialogBoxFootHTML += ' <input type="button" class="btnCancel" value="Cancel" onclick="Prompt.cancel()"/>'
        dialogBoxHead.innerHTML = dialog;
        dialogBoxBody.innerHTML = '<input type="text" class="txtInput" onkeypress="keyPressListener(event)" />';
        dialogBoxFoot.innerHTML = strDialogBoxFootHTML;
        var txtPrompt = document.getElementsByClassName("txtInput")[0];
        txtPrompt.focus();

    }
    this.ok = function () {
        var txtPrompt = document.getElementsByClassName("txtInput")[0];

        var value = txtPrompt.value;
        if (value != "") {

            var dialogOverlay = document.getElementsByClassName("dialogOverlay")[0];
            var dialogBox = document.getElementsByClassName("dialogBox")[0];
            dialogOverlay.style.display = "none";
            dialogBox.style.display = "none";
            var stack = document.getElementsByClassName("stack")[0];
            Push(value);

        }


    }
    this.cancel = function () {
        var dialogOverlay = document.getElementsByClassName("dialogOverlay")[0];
        var dialogBox = document.getElementsByClassName("dialogBox")[0];
        dialogOverlay.style.display = "none";
        dialogBox.style.display = "none";
    }

}
function keyPressListener(e) {
    if (e.keyCode == 13) {
        var btnOK = document.getElementsByClassName("btnOK")[0];
        btnOK.style.backgroundColor = "green";
        btnOK.focus();
    }
}




function CustomerAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogOverLay = document.getElementsByClassName("dialogOverlay")[0];
        var dialogBox = document.getElementsByClassName("dialogBox")[0];
        dialogOverLay.style.display = "block";
        dialogOverLay.style.height = winH + "px";
        dialogBox.style.left = (winW / 2) - (550 / 2) + "px";//  place the alert window at the center;
        dialogBox.style.top = "100px";
        dialogBox.style.display = "block";//change the "none" display

        document.getElementsByClassName('dialogBoxHead')[0].innerHTML = "You attention is required here";
        document.getElementsByClassName('dialogBoxBody')[0].innerHTML = dialog;
        document.getElementsByClassName('dialogBoxFoot')[0].innerHTML = '<button onclick="Alert.ok()">OK</button>';

    }
    this.ok = function () {

        document.getElementsByClassName("dialogBox")[0].style.display = "none";
        document.getElementsByClassName("dialogOverlay")[0].style.display = "none";


    }
}
