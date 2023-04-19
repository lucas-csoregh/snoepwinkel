/*******|
 | INIT |
 *******/
window.addEventListener("load", init);

function init() {
    let punten = document.querySelector("#punten");

    let email = document.querySelector("#email");
    let email_addDot = document.querySelectorAll(".emailErr_addDot");
    let email_noEndDot = document.querySelectorAll(".emailErr_noEndDot");
    let email_noStartDot = document.querySelectorAll(".emailErr_noStartDot");
    let email_repDots = document.querySelectorAll(".emailErr_repDots");
    let email_suffix = document.querySelectorAll(".emailErr_suffix");

    let voornaam = document.querySelector("#voornaam");
    let achternaam = document.querySelector("#achternaam");
    let voornaamErr = document.querySelectorAll(".voornaamErr");
    let achternaamErr = document.querySelectorAll(".achternaamErr");

    let straatnaam = document.querySelector("#straatnaam");
    let huisnr = document.querySelector("#huisnr");
    let gemeente = document.querySelector("#gemeente");
    let straatnaamErr = document.querySelectorAll(".straatnaamErr");
    let huisnrErr = document.querySelectorAll(".huisnrErr");
    let gemeenteErr = document.querySelectorAll(".gemeenteErr");

    let tel = document.querySelector("#tel");
    let telErr = document.querySelectorAll(".telErr");

    let err_puntenOver = document.querySelectorAll(".err_puntenOver");
    let errArray = [];

    let scoreArr = document.querySelectorAll('.score');

    form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        console.log(punten)

        if(punten.innerHTML != 0) {
            for(let i=0; i<err_puntenOver.length; i++) {
                err_puntenOver[i].classList.remove("verborgen");
            }
        }


        if(punten.innerHTML != 0) {
            errArray.push("puntenOver");
        }

        console.log(errArray)
        if(errArray.length == 0) {
            form.submit();
        }
    });

// Validate form //
    email.addEventListener("input", function(){
        checkEmail(email.value);
    });


    /******************|
     | EMAIL VALIDATION |
     *******************/

// CHECKEMAIL: BEFORE THE @ //
    function includesDot(value) {
        let bool;
        for(let i=0; i<email_addDot.length; i++) {
            if(value.includes(".")) {

                if(! (email_addDot[i].classList.contains("verborgen"))) {
                    email_addDot[i].classList.add("verborgen");
                    if(!i) {
                        errArray.splice(errArray.indexOf("addDot"), 1)
                        console.log(errArray)

                    }
                }

                bool = true;
            } else {

                if(email_addDot[i].classList.contains("verborgen")) {
                    email_addDot[i].classList.remove("verborgen");
                    if(!i) {
                        errArray.push("addDot");
                        console.log(errArray)
                    }
                }

                bool = false;
            }
        }
        return bool;
    }
    function noEndDot(value) {
        let bool;
        for(let i=0; i<email_noEndDot.length; i++) {
            if (value.charAt(value.length - 1) !== ".") {
                if (!(email_noEndDot[i].classList.contains("verborgen"))) {
                    email_noEndDot[i].classList.add("verborgen");

                    if(!i) {
                        errArray.splice(errArray.indexOf("noEndDot"), 1)
                        console.log(errArray)

                    }
                }

                bool = true;
            } else {
                if (email_noEndDot[i].classList.contains("verborgen")) {
                    email_noEndDot[i].classList.remove("verborgen");
                    if(!i) {
                        errArray.push("noEndDot");
                        console.log(errArray)
                    }
                }

                bool = false;
            }
        }
        return bool
    }
    function noStartDot(value) {
        let bool;
        for(let i=0; i<email_noStartDot.length; i++) {
            if(value.charAt(0) !== ".") {
                if(! (email_noStartDot[i].classList.contains("verborgen"))) {
                    email_noStartDot[i].classList.add("verborgen");

                    if(!i) {
                        errArray.splice(errArray.indexOf("noStartDot"), 1)
                        console.log(errArray)

                    }
                }

                bool = true;
            } else {
                if(email_noStartDot[i].classList.contains("verborgen")) {
                    email_noStartDot[i].classList.remove("verborgen");

                    if(!i) {
                        errArray.push("noStartDot");
                        console.log(errArray)
                    }
                }

                bool = false;
            }
        }
        return bool;
    }
    function noRepeatingDots(value) {
        let bool;
        for(let i=0; i<email_noStartDot.length; i++) {
            if (/\.\.+/.test(value)) {
                //console.log("fail: prefix's HAS one or more repeating dots '" + value +"'")

                if (email_repDots[i].classList.contains("verborgen")) {
                    email_repDots[i].classList.remove("verborgen");

                    if(!i) {
                        errArray.push("repDots");
                        console.log(errArray)
                    }
                }

                bool = false;
            } else {
                //console.log("success: prefix's doesn't have repeating dots")

                if (!(email_repDots[i].classList.contains("verborgen"))) {
                    email_repDots[i].classList.add("verborgen");


                    if(!i) {
                        errArray.splice(errArray.indexOf("repDots"), 1)
                        console.log(errArray)

                    }
                }

                bool = true
            }
        }
        return bool;
    }

// CHECKEMAIL: AFTER THE @ //
    function isKdgMailSuffix(value) {
        let bool;
        for(let i=0; i<email_suffix.length; i++) {
            //console.log("test")
            if (value === "student.kdg.be" || value === "kdg.be") {
                //console.log("suffix success: after the @ is a valid kdg mail suffix");

                if (!(email_suffix[i].classList.contains("verborgen"))) {
                    email_suffix[i].classList.add("verborgen");

                    if(!i) {
                        errArray.splice(errArray.indexOf("email_suffix"), 1)
                        console.log(errArray)
                    }
                }

                bool = true;
            } else {
                //console.log("suffix fail: after the @ is NOT a valid kdg mail suffix like 'student.kdg.be' or 'kdg.be': "+ value + "'");

                if (email_suffix[i].classList.contains("verborgen")) {
                    email_suffix[i].classList.remove("verborgen");

                    if(!i) {
                        errArray.push("email_suffix");
                        console.log(errArray)
                    }
                }

                bool = false;
            }
        }
        return bool;
    }

    function checkEmail(value) {
        if(value != "") {
            let vars = value.split("@");
            let prefix = vars[0];
            let suffix = vars[1];

            let hasDot;
            let startDot;
            let endDot;
            let repeatingDots;
            let isKdgMail
            hasDot = includesDot(prefix);
            startDot = noStartDot(prefix);
            endDot = noEndDot(prefix);
            repeatingDots = noRepeatingDots(prefix);
            isKdgMail = isKdgMailSuffix(suffix);
            if(hasDot && startDot && endDot && repeatingDots && isKdgMail) {
                email.classList.remove("formErrTrueInput");
                email.classList.add("validinput");
                return true;
            } else {
                email.classList.remove("validinput");
                email.classList.add("formErrTrueInput");
            }
        } else {
            if(email.classList.contains("formErrTrueInput")) {
                email.classList.remove("formErrTrueInput");
            }
            if(email.classList.contains("validinput")) {
                email.classList.remove("validinput");
            }
            for(let i=0; i<email_addDot.length; i++) {
                if(!(email_addDot[i].classList.contains("verborgen"))) {
                    email_addDot[i].classList.add("verborgen");
                }
            }
            for(let i=0; i<email_noEndDot.length; i++) {
                //console.log(i)
                if (!(email_noEndDot[i].classList.contains("verborgen"))) {
                    email_noEndDot[i].classList.add("verborgen");
                }
            }
            for(let i=0; i<email_noStartDot.length; i++) {
                if (!(email_noStartDot[i].classList.contains("verborgen"))) {
                    email_noStartDot[i].classList.add("verborgen");
                }
            }
            for(let i=0; i<email_repDots.length; i++) {
                if (!(email_repDots[i].classList.contains("verborgen"))) {
                    email_repDots[i].classList.add("verborgen");
                }
            }
            for(let i=0; i<email_suffix.length; i++) {
                if (!(email_suffix[i].classList.contains("verborgen"))) {
                    email_suffix[i].classList.add("verborgen");
                }
            }
        }
        return false;
    }


    /******************|
     | NAME VALIDATION |
     ******************/
    straatnaam.addEventListener("blur", function(){
        for(let i=0; i<straatnaamErr.length; i++) {
            noExcessSpaces(straatnaam, straatnaamErr[i]);
        }
    });
    huisnr.addEventListener("blur", function(){
        for(let i=0; i<huisnrErr.length; i++) {
            noExcessSpaces(huisnr, huisnrErr[i]);
        }
    });
    gemeente.addEventListener("blur", function(){
        for(let i=0; i<gemeenteErr.length; i++) {
            noExcessSpaces(gemeente, gemeenteErr[i]);
        }
    });

    voornaam.addEventListener("blur", function(){
        for(let i=0; i<voornaamErr.length; i++) {
            noExcessSpaces(voornaam, voornaamErr[i]);
        }
    });


    voornaam.addEventListener("blur", function(){
        for(let i=0; i<voornaamErr.length; i++) {
            noExcessSpaces(voornaam, voornaamErr[i]);
        }
    });
    achternaam.addEventListener("blur", function(){
        for(let i=0; i<achternaamErr.length; i++) {
            noExcessSpaces(achternaam, achternaamErr[i]);
        }
    });

    function noExcessSpaces(element, err) {
        let value = element.value;
        if(value) {
            if(value === value.trim()) {
                //console.log("success: "+place+" name doesn't have illegal spaces")

                if(! (err.classList.contains("verborgen"))) {
                    err.classList.add("verborgen");
                }

                if(element.classList.contains("formErrTrueInput")) {
                    element.classList.remove("formErrTrueInput");

                    errArray.splice(errArray.indexOf("illegal_spaces"), 1)
                    console.log(errArray)
                }

                if(!(element.classList.contains("validinput"))) {
                    element.classList.add("validinput");
                }

                //return true
            } else {
                //console.log("fail: "+place+" name has illegal spaces: '" + value +"'")

                if(err.classList.contains("verborgen")) {
                    err.classList.remove("verborgen");
                }

                if(element.classList.contains("validinput")) {
                    element.classList.remove("validinput");
                }

                if(!(element.classList.contains("formErrTrueInput"))) {
                    element.classList.add("formErrTrueInput");

                    errArray.push("illegal_spaces");
                    console.log(errArray)
                }

                //return false;
            }
        } else {

            if(! (err.classList.contains("verborgen"))) {
                err.classList.add("verborgen");
            }

            if(element.classList.contains("formErrTrueInput")) {
                element.classList.remove("formErrTrueInput");

                errArray.push("illegal_spaces");
                console.log(errArray)
            }

            if(element.classList.contains("validinput")) {
                element.classList.remove("validinput");
            }
        }
    }


    /******
     * TEL *
     ******/
// Check TELEPHONE NR
    tel.addEventListener("blur", function(){testPhnr(tel.value)});

    function testPhnr(telephone) {
        let telTest =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(telephone);
        for(let i=0; i<telErr.length; i++) {
            if (telephone) {
                if (telTest) {
                    if (tel.classList.contains("formErrTrueInput")) {
                        tel.classList.remove("formErrTrueInput");
                    }

                    if (!(telErr[i].classList.contains("verborgen"))) {
                        telErr[i].classList.add("verborgen");
                    }

                    tel.classList.add("validinput");
                    //return true;
                } else {
                    //console.log(tel.classList.contains("formErrTrueInput"))
                    if (tel.classList.contains("validinput")) {
                        tel.classList.remove("validinput");
                    }

                    if (telErr[i].classList.contains("verborgen")) {
                        telErr[i].classList.remove("verborgen");
                    }

                    tel.classList.add("formErrTrueInput");
                    //return false;
                }
            }
        }
    }


    for(let i=0; i<scoreArr.length; i++) {
        let punten = document.getElementById("punten");
        const currentInput = scoreArr[i];
        const input = currentInput.parentNode.querySelector("input");
        const buttons = input.parentNode.querySelectorAll("button");
        let err_puntenOver = document.querySelectorAll(".err_puntenOver");

        buttons[0].addEventListener("click", function() {
            if(punten.innerText > 0) {
                input.value++;
                punten.innerText--;
                console.log(punten.innerText)


            } else {
                punten.classList.remove("red");
                errArray.splice(errArray.indexOf("puntenOver"), 1)
                console.log(errArray)

                for(let i=0; i<err_puntenOver.length; i++) {
                    err_puntenOver[i].classList.add("verborgen");
                }
            }
        })

        buttons[1].addEventListener("click", function() {
            if(currentInput.value > 0 && punten.innerText < 12) {
                currentInput.value--;
                punten.innerText++;
            }
        })
    }
}


