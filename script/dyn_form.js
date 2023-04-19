import { producten } from "./dyn_data.js";

let ingredienten = document.querySelector("#ingredienten");

function init() {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerHTML = producten[0].naam;

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td2.innerHTML = "Punten:&nbsp;";
    td2.classList.add("end");

    let span = document.createElement("span");
    span.innerHTML = "12";
    span.id = "punten";
    td2.appendChild(span);
    td2.classList.add("flex-row");

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    ingredienten.appendChild(tr);
}

init()

function addHeaderRow(string) {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerHTML = string;

    tr.appendChild(th);
    tr.appendChild(document.createElement("td"));
    tr.appendChild(document.createElement("td"));
    ingredienten.appendChild(tr);
}


for(let i=0; i< producten.length; i++) {
    let currentCategory = producten[i];
    if(i!=0) {
        addHeaderRow(currentCategory.naam)
    }
    for(let i=0; i<currentCategory.lijst.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = currentCategory.lijst[i].afb_sm;
        td1.appendChild(img);

        let td2 = document.createElement("td");
        td2.innerHTML = currentCategory.lijst[i].naam;

        let td3 = document.createElement("td");
        let div = document.createElement("div");
        div.classList.add("flex-row");
        div.classList.add("counter");

        let button_plus = document.createElement("button");
        button_plus.id = currentCategory.lijst[i].key + "-up";
        button_plus.type = "button";
        button_plus.classList.add("up");
        button_plus.innerHTML = "+";
        div.appendChild(button_plus);

        let inputNum = document.createElement("input");
        inputNum.type = "text";
        inputNum.readOnly = true;
        inputNum.classList.add("score");
        inputNum.id = currentCategory.lijst[i].key;
        inputNum.name = currentCategory.lijst[i].key;
        inputNum.value = 0;
        div.appendChild(inputNum);

        let button_minus = document.createElement("button");
        button_minus.id = currentCategory.lijst[i].key + "-down";
        button_minus.type = "button";
        button_minus.classList.add("down");
        button_minus.innerHTML = "-";
        div.appendChild(button_minus);

        td3.appendChild(div)

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        ingredienten.appendChild(tr);
    }

}

/*
function populateTable() {
    for(let i=0; i<producten.length; i++) {
        if(producten[i].naam == "Toblerone") {
            addHeaderRow("Chocolade");
        } else if(producten[i].naam == "Jules Destrooper") {
            addHeaderRow("Koeken");
        }
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = producten[i].afb_sm;
        td1.appendChild(img);

        let td2 = document.createElement("td");
        td2.innerHTML = producten[i].naam;

        let td3 = document.createElement("td");
        let div = document.createElement("div");
        div.classList.add("flex-row");
        div.classList.add("counter");

        let button_plus = document.createElement("button");
        button_plus.id = producten[i].key + "-up";
        button_plus.type = "button";
        button_plus.classList.add("up");
        button_plus.innerHTML = "+";
        div.appendChild(button_plus);

        let inputNum = document.createElement("input");
        inputNum.type = "text";
        inputNum.readOnly = true;
        inputNum.classList.add("score");
        inputNum.id = producten[i].key;
        inputNum.name = producten[i].key;
        inputNum.value = 0;
        div.appendChild(inputNum);

        let button_minus = document.createElement("button");
        button_minus.id = producten[i].key + "-down";
        button_minus.type = "button";
        button_minus.classList.add("down");
        button_minus.innerHTML = "-";
        div.appendChild(button_minus);

        td3.appendChild(div)

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        ingredienten.appendChild(tr);

        //console.log(producten[i]);
    }
}


init();
populateTable();
 */