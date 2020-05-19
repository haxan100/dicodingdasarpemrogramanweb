function tampilkanMenu() {
	var navigasi 	= document.getElementById("nav");
    if (navigasi.className === "menu") {
        navigasi.className += " responsive";
    } else {
        navigasi.className = "menu";
    }
}