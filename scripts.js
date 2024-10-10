//funktio joka lisää tekstikentän syötteen listaan
function submittargets() {
    event.preventDefault();
    var x = document.getElementsByTagName('input');
    var syöte = x[0].value;
    var t = document.getElementById('list');
    var l =t.tBodies[0].rows.length;
    var r = t.insertRow(l);
    var cell1 = r.insertCell(0);
    cell1.innerHTML = syöte;
    
    
}

//kuuntelija listalle lisäämiseen
var x = document.getElementsByTagName('input');
x[1].addEventListener("click", submittargets);

//funktio listan tyhjentämiseen


//kuuntelija listan tyhjentämiseen

//myös tehtävä funkito ja kuuntelija joilla merkitään asia listalla tehdyksi
