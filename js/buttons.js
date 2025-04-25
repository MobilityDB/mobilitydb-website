//Copytoclipboard

function ClipboardFill(opt) {
    var value = "error";
    if (opt === "ACM") {
        value = "Mahmoud Sakr, and Esteban Zimányi. <i>Mobility Data Science: From Data to Insights</i> Springer 2025, ISSN: 978-3-031-82636-8"
    } else if (opt === "BiBTeX") {
        value = "@article{MobilityDataScience2025,\n" +
            "author = {Sakr, Mahmoud and Vaisman, Alejandro and Zim\\'{a}nyi, Esteban},\n" +
            "title = {Mobility Data Science: From Data to Insights},\n" +
            "publisher = {Springer},\n" +
            "year = {2025},\n" +
            "issn = {978-3-031-82636-8},\n" +
            "}\n" +
            "\n"
    } else {
        return
    }

    var tooltip = document.getElementById("button"+ opt)
    navigator.clipboard.writeText(value);
    tooltip.innerHTML = "Copied !";
}

function fadeout(opt) {
    var tooltip = document.getElementById("button" + opt);
    setTimeout(() =>  tooltip.innerHTML = opt, 1000);
}