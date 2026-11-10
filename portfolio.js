function restart() {
    window.location.reload();
}



let p = 0;
let design = 0;
let autent = 0;
let media = 0;
let utility = 0;
let lang = 0;
let forms = 0;
let back = 0;
let os = 0;
let online = 0;


let orcamento = 0;

function atualizarorcamento() {

    document.getElementsByName("orcamento")[0].innerText = "Estimated value: " + orcamento;
}



function principal() {
    document.getElementById("formulariop").style.display = "none";

    let valor = document.querySelector('input[name="tipop"]:checked');
    valor = valor.value;

    p = valor;

    if (p == 0) {
        orcamento += 4000;

        document.getElementById("formulariod").style.display = "block";

    }
    else if (p == 1) {

        document.getElementById("formularioOS").style.display = "block";



    }
    atualizarorcamento();




}

function formd() {

    if (p == 0 || (p == 1 && orcamento >= 4000)) {



        document.getElementById("formulariod").style.display = "none";
        design = document.querySelector('input[name="tipod"]:checked');
        design = design.value;

        if (design == 0) {
            orcamento += 3000;
            document.getElementById("formulario3").style.display = "block";
        }
        else if (design == 1) {
            orcamento += 9000;
            document.getElementById("formulario3").style.display = "block";

        }

        atualizarorcamento();




    }



    else if (p == 1) {

        document.getElementById("formularioOS").style.display = "none";


        os = document.querySelector('input[name="tipoOS"]:checked');
        os = os.value;

        if (os == 0 || os == 1) {
            orcamento += 4000;
            document.getElementById("formulariod").style.display = "block";

        }
        else if (os == 2) {
            orcamento += 7000;
            document.getElementById("formulariod").style.display = "block";

        }
        atualizarorcamento();

    }


}

function form3() {
    document.getElementById("formulario3").style.display = "none";





    autent = document.querySelector('input[name="tipo3"]:checked');
    autent = autent.value;

    if (autent == 0) {
        document.getElementById("formulario4").style.display = "block";

    }
    else if (autent == 1) {
        orcamento += 3000;
        document.getElementById("formulario4").style.display = "block";

    }
    else if (autent == 2) {
        orcamento += 6000;
        document.getElementById("formulario4").style.display = "block";

    }
    else if (autent == 3) {
        orcamento += 6000;
        document.getElementById("formulario4").style.display = "block";

    }
    atualizarorcamento();

}
function form4() {
    document.getElementById("formulario4").style.display = "none";


    media = document.querySelector('input[name="tipo4"]:checked');
    media = media.value;

    if (media == 0 && p == 1) {
        document.getElementById("formulario5t").style.display = "block";

    }
    else if (media == 1 && p == 1) {
        orcamento += 5000;
        document.getElementById("formulario5t").style.display = "block";

    }
    else if (media == 2 && p == 1) {
        orcamento += 10000;
        document.getElementById("formulario5t").style.display = "block";

    }

    else {
        if (media == 0) {
            document.getElementById("formulario5").style.display = "block";

        }
        else if (media == 1) {
            orcamento += 5000;
            document.getElementById("formulario5").style.display = "block";

        }
        else if (media == 2) {
            orcamento += 10000;
            document.getElementById("formulario5").style.display = "block";

        }
    }
    atualizarorcamento();



}
function form5() {
    
   

    if (p == 0) {
        document.getElementById("formulario5").style.display = "none";
        utility = document.querySelector('input[name="tipo5"]:checked');
        utility = utility.value;
    }
    else if (p == 1) {
        document.getElementById("formulario5t").style.display = "none";
        utility = document.querySelector('input[name="tipo5t"]:checked');
        utility = utility.value;
    }

    if (utility == 0) {
        document.getElementById("formulario6").style.display = "block";

    }
    else if (utility == 1 || utility == 9) {
        orcamento += 5000;
        document.getElementById("formulario6").style.display = "block";

    }
    else if (utility == 2) {
        orcamento += 2500;
        document.getElementById("formulario6").style.display = "block";

    }
    else if (utility == 3 || utility == 4) {
        orcamento += 7500;
        document.getElementById("formulario6").style.display = "block";

    }
    atualizarorcamento();



}
function form6() {
    document.getElementById("formulario6").style.display = "none";


    lang = document.querySelector('input[name="tipo6"]:checked');
    lang = lang.value;

    if (lang == 0) {
        document.getElementById("formulario7").style.display = "block";

    }
    else if (lang == 1) {
        orcamento += 7500;
        document.getElementById("formulario7").style.display = "block";

    }


    atualizarorcamento();



}
function form7() {
    document.getElementById("formulario7").style.display = "none";


    forms = document.querySelector('input[name="tipo7"]:checked');
    forms = forms.value;

    console.log(forms);

    if (forms == 0) {
        document.getElementById("formulario8").style.display = "block";

    }
    else if (forms == 1) {
        orcamento += 1000;
        document.getElementById("formulario8").style.display = "block";

    }
    else if (forms == 2) {
        orcamento += 2500;
        document.getElementById("formulario8").style.display = "block";

    }
    else if (forms == 3) {
        orcamento += 5000;
        document.getElementById("formulario8").style.display = "block";

    }
    else if (forms == 4) {
        orcamento += 12500;
        document.getElementById("formulario8").style.display = "block";

    }
    atualizarorcamento();



}
function form8() {
    document.getElementById("formulario8").style.display = "none";


    back = document.querySelector('input[name="tipo8"]:checked');
    back = back.value;

    console.log(back);

    if (back == 0 && p == 0) {
        document.getElementById("formulariof").style.display = "block";

    }
    else if (back == 1 && p == 0) {
        orcamento += 10000;
        document.getElementById("formulariof").style.display = "block";

    }
    if (back == 0 && p == 1) {
        document.getElementById("formulario9").style.display = "block";

    }
    else if (back == 1 && p == 1) {
        orcamento += 10000;
        document.getElementById("formulario9").style.display = "block";

    }



    atualizarorcamento();



}
function form9() {
    document.getElementById("formulario9").style.display = "none";




    online = document.querySelector('input[name="tipo9"]:checked');
    online = online.value;

    if (online == 0) {
        document.getElementById("formulariof").style.display = "block";

    }
    else if (online == 1) {
        orcamento += 10000;
        document.getElementById("formulariof").style.display = "block";

    }



    atualizarorcamento();



}















