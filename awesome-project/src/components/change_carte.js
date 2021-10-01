var x = document.getElementById("fr");
var a = document.getElementById("map_gua");
var b = document.getElementById("map_guay");
var c = document.getElementById("map_mar");
var d = document.getElementById("map_may");
var e = document.getElementById("map_reu");

function change_carte(map) {
    if (map === 'France') {
        if (x.style.display === "none") {
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            x.style.display = "block";
        }
    }
    else if (map === 'Guadeloupe') {
        if (a.style.display === "none") {
            x.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            a.style.display = "block";
        }
    }
    else if (map === 'Guyane') {
        if (d.style.display === "none") {
            a.style.display = "none";
            x.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            b.style.display = "block";
        }
    }
    else if (map === 'Martinique') {
        if (c.style.display === "none") {
            a.style.display = "none";
            b.style.display = "none";
            x.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            c.style.display = "block";
        }
    }
    else if (map === 'Mayotte') {
        if (d.style.display === "none") {
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            x.style.display = "none";
            e.style.display = "none";
            d.style.display = "block";
        }
    }
    else if (map === 'Reunion') {
        if (e.style.display === "none") {
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            x.style.display = "none";
            e.style.display = "block";
        }
    }
}
export default change_carte;