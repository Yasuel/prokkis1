//funktio joka lisää tekstikentän syötteen listaan
function submittarget() {
    event.preventDefault();
    var x = document.getElementsByTagName('input');
    var syöte = x[0].value;
    //tarkistetaan onko kentässä syötettä ja heitetään virheilmoitus konsolille
    if (syöte.length < 1) {
        throw new Error("Target can not be empty")
    }
    //lisätään uusi rivi
    var t = document.getElementById('list');
    var l =t.tBodies[0].rows.length;
    var r = t.insertRow(l);
    //luodaan ja lisätään checkbox
    var cell2 = r.insertCell(0);
    var nap = document.createElement("input")
    nap.type = "checkbox"
    nap.addEventListener("change", yliviivaa())
    cell2.appendChild(nap)
    //lisätään itse syötä listaan ja tyhjätään syötekenttä
    var cell3 = r.insertCell(1);
    cell3.innerHTML = syöte;
    x[0].value = '';
    //tällä tehdään poistonappula, 
    //mutta koska en saa siihen toiminnallisuutta, 
    //jätän sen vain kommentoituna tänne
    //var cell1 = r.insertCell(2);
    //var del = document.createElement("input")
    //del.type = "submit"
    //del.value = "Delete row"
    //cell1.appendChild(del)
}

//kuuntelija listalle lisäämiseen
var x = document.getElementsByTagName('input');
x[1].addEventListener("click", submittarget);

//funktio listan tyhjentämiseen (olikos tämä nyt JQuery eli kielletty?)
function clearlist() {
    var tbody = document.querySelector("#list tbody");
    tbody.innerHTML = "";
}

//funktio rivin yliviivaamisen (mielekiinto loppui)
function yliviivaa() {

}

//kuuntelija listan tyhjentämiseen
var z = document.getElementsByTagName('input')
z[2].addEventListener("click", clearlist);
