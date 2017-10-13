function heyuser(): void {
    let input: string = prompt("Whats ya name?","");
    if (input != null) {
        document.getElementById("welcome").innerHTML =
            "Hey" + input + "! Welcome :)";
        }
    }