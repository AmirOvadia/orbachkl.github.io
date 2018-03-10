function InsertAgeRange() {
    var age = document.getElementById("age");
   
    var min = 0;
    var max = 120;
    for (var i = min; i < max; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        age.appendChild(option);
    }

}
function Validation() {
    var flag=false;
    
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementsByName("gender");
    var hobbies = document.getElementsByTagName("input");
    var container = document.querySelector('#frm');
    


    var checkBoxesSelected = container.querySelectorAll('input[type="checkbox"]:checked');
    
    if (name != null && address!=null && 0 == !name.length && age > 0 && city != "Select" && 0 == !address.length  ) {
        flag=true;
    }    
    else {
        flag = false;
    }

    if (!gender[0].checked && !gender[1].checked)
    {
        flag = false;
   
        
    }
    
    if (!checkBoxesSelected.length > 0) {
        flag = false;
      
    }
    console.log(flag);
    label = document.getElementById("lblLogin");
    if (flag) {
        label.innerText = "You Logged In";

    }
    else {
        label.innerText = "Please fill in all fields";
    }


}