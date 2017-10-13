function heyuser() {
    var text :any;
    var user = prompt("Whats ya name?","Name");
    if (user == null || user == "") {
        text = "error";
    } else {
        text = "Hey" + user + ", Welcome :)";
        }
    document.getElementById("welcome").innerHTML = text;
    }