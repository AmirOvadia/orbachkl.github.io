function Calc(operator) {
    var txtNum1 = document.getElementById("txtNum1").value;
    var txtNum2 = document.getElementById("txtNum2").value;

    if (txtNum1 == "" || txtNum2 == "") {
        alert("please enter 2 numbers");
    }
    else {
        switch (operator) {
            case '+':
                var result = parseInt(txtNum1) + parseInt(txtNum2);
                break;
            case '*':
                var result = parseInt(txtNum1) * parseInt(txtNum2);
                break;
            case '-':
                var result = parseInt(txtNum1) - parseInt(txtNum2);
                break;
            case '/':
                var result = parseInt(txtNum1) / parseInt(txtNum2);
                break;
            case '%':
                var result = parseInt(txtNum1) % parseInt(txtNum2);
                break;


        }

        var txtNum3 = document.getElementById("txtNum3");
        txtNum3.value = result;
    }



}