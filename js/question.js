document.getElementById("questionButton").onclick = function() {
    document.getElementById("questionPopup").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("questionPopup").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("questionPopup")) {
        document.getElementById("questionPopup").style.display = "none";
    }
}

// Add event listeners for radio buttons
document.getElementById("contactMethodEmail").addEventListener("change", function() {
    document.getElementById("emailField").classList.remove("hidden");
    document.getElementById("phoneField").classList.add("hidden");
});

document.getElementById("contactMethodPhone").addEventListener("change", function() {
    document.getElementById("phoneField").classList.remove("hidden");
    document.getElementById("emailField").classList.add("hidden");
});