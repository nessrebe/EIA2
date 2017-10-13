function heyuser() {
    var text;
    var user = prompt("Whats ya name?", "Name");
    if (user == null || user == "") {
        text = "error";
    }
    else {
        text = "Hey" + user + ", Welcome :)";
    }
    document.getElementById("welcome").innerHTML = text;
}
//# sourceMappingURL=Miniseite.js.map