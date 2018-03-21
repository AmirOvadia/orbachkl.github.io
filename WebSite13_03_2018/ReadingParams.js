function ReadParams() {
    var temp = location.search;
    console.log("temp:"+ temp);
    temp = temp.substring(1);
    console.log("temp2:" + temp);
    var params = temp.split('&');
    console.log("params:" + params);
    var nameStr="";
    var valStr = "";
    for (var i = 0; i < params.length; i++) {

        var pos = params[i].indexOf('=');
        if (pos<0) {
            continue;
        }
        var name = params[i].substring(0, pos);
        var val = params[i].substring(pos + 1);
        nameStr += name+" ";
        valStr += val + " ";
        console.log("name:" + name);
        console.log("val:" + val);

    }
    console.log("name:" + nameStr);
    console.log("val:" + valStr);
    var lblData = document.getElementById("lblQueryString");
    lblData.innerText = nameStr + valStr;

}