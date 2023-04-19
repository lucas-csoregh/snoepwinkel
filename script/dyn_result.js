import { producten } from "./dyn_data.js";

const url = new URL(window.location);
const params = url.searchParams;

let choices = document.getElementById("choices");
let choicesW = document.getElementById("choicesWithPics").querySelector("tbody");
let details = document.getElementById("details");
let address = document.getElementById("address");

function addMiniTableRow(table, message) {
    let table_tr = document.createElement("tr");
    let table_td = document.createElement("td");
    table_td.innerHTML = message;
    table_tr.appendChild(table_td);
    table.appendChild(table_tr)
}

let details_arr = ["voornaam", "achternaam", "email", "tel"];
let address_arr = ["huisnr", "straatnaam", "gemeente"];

function sortResults(key, value) {
    let z = document.createElement("span");
    let result;
    //details.appendChild(dr);

    if(details_arr.includes(key)) {
        switch(key) {
            case "email":
                z.innerHTML = "E-mail adres: "+value;
                result = z;
                break;
            case "tel":
                z.innerHTML = "Telefoonnummer: "+value;
                result = z;
                break;
            case "voornaam":
                z.innerHTML = "Voornaam: "+value;
                result = z;
                break;
            case "achternaam":
                z.innerHTML = "Achternaam: "+value;
                result = z;
                break;
            default:
                z.innerHTML = key+" "+value;
                result = z;
                break;
        }
        details.appendChild(result);
    } else if(address_arr.includes(key)) {
        switch(key) {
            case "straatnaam":
                z.innerHTML = "Straatnaam: "+value;
                result = z;
                break;
            case "huisnr":
                z.innerHTML = "Huis nr: "+value;
                result = z;
                break;
            case "gemeente":
                z.innerHTML = "Gemeente: "+value;
                result = z;
                break;
            default:
                z.innerHTML = key+" "+value;
                result = z;
                break;
        }
        address.appendChild(result);
    } else {
        switch(key) {
            case "grams":
                z.innerHTML = "Hoeveel snoep: "+value;
                result = z;
                break;
            case "zakKleur":
                z.innerHTML = "Kleur van jouw snoepzak: "+value;
                result = z;
                break;
            default:
                z.innerHTML = key+" "+value;
                result = z;
                break;
        }
        choices.appendChild(result);
    }
}
let categorie;

params.forEach((value,key) => {
    if(value!=0 && value!=null && value!="") {
        if(value < 13) {
            let index = 0;
            let obj;
            for(let i=0; i<producten.length;i++) {
                //console.log(index)
                index = producten[i].lijst.findIndex(object => {return object.key == key } );
                if(index != -1) {
                    obj = producten[i].lijst[index];
                    categorie = producten[i].naam;
                }
            }
            console.log(key, value, obj)
            let tr = document.createElement("tr");
            choicesW.appendChild(tr);

            let td = document.createElement("td");
            choices.appendChild(td);

            let img = document.createElement("img");
            img.src = obj.afb_sm;
            td.appendChild(img);
            tr.appendChild(td);

            let td1 = document.createElement("td");
            choices.appendChild(td1);
            tr.appendChild(td1);

            let table = document.createElement("table");
            td1.appendChild(table);

            let td2 = document.createElement("td");
            td2.innerHTML = "<strong>Beschrijving:</strong><br>"+ obj.beschrijving;
            tr.appendChild(td2)

            let td3 = document.createElement("td");
            tr.appendChild(td3);
            let table1 = document.createElement("table");
            td3.appendChild(table1);

            if(obj.link != null) {
                addMiniTableRow(table, value+" x "+ "<a href=\"" + obj.link +"\">"+ obj.naam+ "<\a>" );
            } else {
                addMiniTableRow(table, value+" x "+obj.naam);
            }
            addMiniTableRow(table, "<strong>Gemaakt door:</strong>&nbsp;"+ obj.belangrijkste_productspecificaties.gemaakt_door)
            addMiniTableRow(table, "<strong>Categorie:</strong>&nbsp;"+ categorie);

            addMiniTableRow(table1, "<strong>Standaard Gewicht:</strong>&nbsp;"+ obj.belangrijkste_productspecificaties.gewicht)
            addMiniTableRow(table1, "<strong>Standaard Prijs:</strong>&nbsp;"+obj.prijs);
        } else {
            sortResults(key, value);
        }
    }
});