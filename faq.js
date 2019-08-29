var qst = document.getElementsByClassName("questionbox");
var i;

for (i = 0; i < qst.length; i++) {
    qst[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}