function myFunction() {
    // console.log("text");
    var x = document.getElementsByClassName("mainstwo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function personal() {
    // console.log("text");
    var x = document.getElementsByClassName("exp");
    var y = document.getElementsByClassName("tambahan_edu");
    // var x = document.getElementsByClassName("personal");
    var z = document.getElementsByClassName("me");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function All() {
    // console.log("text");
    var x = document.getElementsByClassName("exp");
    // console.log(x);
    // return(false);

    var y = document.getElementsByClassName("tambahan_edu");
    var o = document.getElementsByClassName("personal");
    var z = document.getElementsByClassName("me");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
        o.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        o.style.display = "none";
    }
}
function me() {
    // console.log("text");
    var x = document.getElementsByClassName("exp");
    var y = document.getElementsByClassName("tambahan_edu");
    var o = document.getElementsByClassName("personal");
    // var z = document.getElementsByClassName("me");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        // z.style.display = "block";
        o.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        // z.style.display = "none";
        o.style.display = "none";
    }
}
function Experience() {
    // console.log("text");
    // var x = document.getElementsByClassName("exp");
    var y = document.getElementsByClassName("tambahan_edu");
    var o = document.getElementsByClassName("personal");
    var z = document.getElementsByClassName("me");
    if (y.style.display === "none") {
        // x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
        o.style.display = "block";
    } else {
        // x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        o.style.display = "none";
    }
}