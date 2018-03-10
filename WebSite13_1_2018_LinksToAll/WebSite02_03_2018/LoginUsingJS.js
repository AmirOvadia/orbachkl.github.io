function login() {
    var userName = document.getElementById("UserName").value;
    var password = document.getElementById("Password").value;
    var toRemeber = document.getElementById("RememberMe").checked;
    console.log(userName);
    console.log(password);
    console.log(toRemeber);
    
    var lblIsLoggeIn = document.getElementById("isLoggedIn");
    if (userName == "good" && password == "day!") {
        lblIsLoggeIn.innerText = "online";
        if (toRemeber) {
            lblIsLoggeIn.innerText = userName +" "+  "online";
        }
    }
    else {
        lblIsLoggeIn.innerText = "offline";
    }

}