const url = "http://localhost:9090/section/4/media";
let jsonaire;

fetch(url)
    .then(function (aire) {
        return aire.json();
    })
    .then(function (json) {
        jsonaire = json;
    });

function Agua() {
    document.querySelector("#airefirst").innerHTML=jsonaire["media"][0]["description"]
    document.querySelector("#audioAire1> source").src=jsonaire["media"][0]["urls"]

    document.querySelector("#airesecond").innerHTML=jsonaire["media"][1]["description"]
    document.querySelector("#audioAire2 > source").src=jsonaire["media"][1]["urls"]

    document.querySelector("#airethird").innerHTML=jsonaire["media"][2]["description"]
    document.querySelector("#audioAire3 > source").src=jsonaire["media"][2]["urls"]

    document.querySelector("#airefourth").innerHTML=jsonaire["media"][3]["description"]
    document.querySelector("#audioAire4 > source").src=jsonaire["media"][3]["urls"]

    document.querySelector("#airefifth").innerHTML=jsonaire["media"][4]["description"]
    document.querySelector("#audioAire5 > source").src=jsonaire["media"][4]["urls"]
}