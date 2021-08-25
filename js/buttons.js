//Copytoclipboard

function ClipboardFill(opt) {
    var value = "error";
    if (opt === "ACM") {
        value = "Esteban Zimányi, Mahmoud Sakr, and Arthur Lesuisse. 2020. MobilityDB: A Mobility Database Based on PostgreSQL and PostGIS. <i>ACM Trans. Database Syst.</i> 45, 4, Article 19 (December 2020) DOI:https://doi.org/10.1145/3406534"
    } else if (opt === "BiBTeX") {
        value = "@article{MobilityDBTODS2020,\n" +
            "author = {Zim\\'{a}nyi, Esteban and Sakr, Mahmoud and Lesuisse, Arthur},\n" +
            "title = {{MobilityDB}: A Mobility Database Based on {PostgreSQL} and {PostGIS}},\n" +
            "year = {2020},\n" +
            "publisher = {Association for Computing Machinery},\n" +
            "volume = {45},\n" +
            "number = {4},\n" +
            "doi = {10.1145/3406534},\n" +
            "journal = {ACM Trans. Database Syst.},\n" +
            "month = dec,\n" +
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