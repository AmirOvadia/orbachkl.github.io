
var Alert = new CustomerAlert();

function CustomerAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogOverLay = document.getElementsByClassName("dialogOverlay")[0];
        var dialogBox = document.getElementsByClassName("dialogBox")[0];
        dialogOverLay.style.display = "block";
        dialogOverLay.style.height = winH + "px";
        dialogBox.style.left = (winW / 2) - (550 /2) + "px";//  place the alert window at the center;
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
