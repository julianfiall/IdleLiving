window.onload = function() {
    bankbal()
    function bankbal(){
        document.getElementById("bankbal").innerHTML = "$" + localStorage.bank;
    };
}
function work() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.bank) {
            localStorage.bank = Number(localStorage.bank) + 200;
        } else {
            localStorage.bank = 0;
        }
        document.getElementById("bankbal").innerHTML = "$" + localStorage.bank;
    } else {
        document.getElementById("bankbal").innerHTML = "Your browser does not support this game.";
    }
    bank = bank + 200;
    document.getElementById('bankbal').innerHTML = bank;
    localStorage.setItem(bank);
}
function changelog() {
    document.getElementById("changelog-modal-js").style.display = "block";
}
function closeChangelog() {
    document.getElementById("changelog-modal-js").style.display = "none";
}