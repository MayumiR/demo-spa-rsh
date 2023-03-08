function showHome() {
    document.getElementById('about').style.display = "none";
    document.getElementById('sales').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display="block";
}

function showAbout() {
    document.getElementById('sales').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display="none";
    document.getElementById('about').style.display = "block";
}

function showSales() {
    document.getElementById('about').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display="none";
    document.getElementById('sales').style.display = "block";
}

function showContact() {
    document.getElementById('about').style.display = "none";
    document.getElementById('sales').style.display = "none";
    document.getElementById('home').style.display="none";
    document.getElementById('contact').style.display = "block";
}