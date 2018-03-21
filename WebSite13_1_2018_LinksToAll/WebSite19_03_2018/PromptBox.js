var Prompt = new CustomerPrompt();

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
        
        dialogBoxHead.innerHTML = dialog;
        dialogBoxBody.innerHTML = '<input type="text" class="txtInput" onkeypress="keyPressListener(event)" />';
        dialogBoxFoot.innerHTML = '<input type="button" class="btnOK" value="OK" onclick="Prompt.ok()"/> ' + ' <input type="button" class="btnCancel" value="Cancel" onclick="Prompt.cancel()"/>'
        var txtPrompt = document.getElementsByClassName("txtInput")[0];
        txtPrompt.focus();

    }
    this.ok = function () {
        var txtPrompt = document.getElementsByClassName("txtInput")[0];
       
        var value = txtPrompt.textContent;
        var dialogOverlay = document.getElementsByClassName("dialogOverlay")[0];
        var dialogBox = document.getElementsByClassName("dialogBox")[0];
        dialogOverlay.style.display = "none";
        dialogBox.style.display = "none";
        var Value = document.getElementsByClassName("Value")[0];
       
        Value.innerHTML ="You typed: "+txtPrompt.value;
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