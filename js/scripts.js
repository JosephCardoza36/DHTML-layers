var size = document.getElementsByTagName('a').length;
for (var i = 0; i < size; i++) {
    document.getElementsByTagName('a')[i].addEventListener('click', showHide, false);
}

function showHide() {
    var size = document.getElementsByTagName('section').length;
    for (var i = 0; i < size; i++) {
        document.getElementsByTagName('section')[i].style.display = "none";
    }
    document.getElementById('inst' + this.id).style.display = "block";
}

document.getElementById('home').addEventListener('click', function () {
    var size = document.getElementsByTagName('section').length;
    for (var i = 0; i < size; i++) {
        document.getElementsByTagName('section')[i].style.display = "none";
    }
});
