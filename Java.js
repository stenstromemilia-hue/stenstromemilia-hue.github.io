


function sokPaSidan () {
 let sokord = document.getElementById("sokfalt").value;

    if (sokord === "") { 
        alert ("Skriv något att söka efter!");
    } else {
        alert("Du söker efter: " + sokord);
    }
}
