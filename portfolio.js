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

function formularioemail()
{
    
    
        var formulario = document.getElementById("formulariof");
        
        document.body.style.overflow = "hidden";

    
        // mostrar
        formulario.style.display = "block";
    
        // centrar
        formulario.style.position = "fixed";
        formulario.style.top = "50%";
        formulario.style.left = "50%";
        formulario.style.transform = "translate(-50%, -50%)";
    }
    
    function fecharFormulario() {
        var formulariof = document.getElementById("formulariof");
        formulariof.style.display = "none";
        document.body.style.overflow = "visible";

      }










function enviaremail() {
    // Obtenha os valores dos campos do formulário

    p;
    switch (p) {
        case 1:
            p = "Phone app";
            break;

        default:
            p = "Website";
    }
    design;

    switch (design) {
        case 0:
            design = "Minimalist";
            break;

        default:
            design = "Modern";

            break;
    }


    autent;

    switch (autent) {
        case 0:
            autent = "None";
            break;
        case 1:
            autent = "Basic";
            break;
        case 2:
            autent = "Social Media";
            break;

        default:
            autent = "Integrated with existing system";

            break;
    }
    media;


    switch (media) {
        case 0:
            media = "None";

            break;

        case 1:
            media = "Audio or video playback/recording ";
            break;


        default:
            media = "Live streaming or more complex media features";

            break;
    }
    utility;
    switch (utility) {
        case 0:
            utility = "None"

            break;
        case 1:
            utility = "Maps&Location ";
            break;
        case 2:
            utility = "Notifications";
            break;
        case 3:
            utility = "Booking and ratings";
            break

        case 4:
            utility = "Online Shop";

        default:
            utility = "Connect to other devices";
            break;
    }

    lang;
    switch (lang) {
        case 0:
            lang = "No";

            break;

        default:
            lang = "Yes";
            break;
    }

    forms;

    switch (forms) {
        case 0:
            forms = "None";

            break;
        case 2:
            forms = "1";
            break;
        case 2:
            forms = "2 to 5";
            break;
        case 3:
            forms = "6 to 10";
            break;
        default:
            forms = "More than 11";
            break;
    }



    back;
    switch (back) {
        case 0:
            back = "No";

            break;

        default:
            back = "Yes";
            break;
    }

    os;

    switch (os) {
        case 0:
            os = "Android";

            break;
        case 1:
            os = "iOS";

            break;

        default:
            os = "Android and iOS";
            break;
    }

    online;
    switch (online) {
        case 0:
            online = "No";

            break;

        default:
            online = "Yes";
            break;
    }








    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    //corpo do e-mail com as informações do formulário
    var corpoEmail = "Name: " + nome + "%0D%0AEmail: " + email + "%0D%0APlatform: " + p + "%0D%0ADesign: " + design
    + "%0D%0AType of autentication: " + autent + "%0D%0AMedia Features: " + media + "%0D%0AUtility Features: " + utility 
    + "%0D%0AMulti-languages support: " + lang + "%0D%0AForms Quantity: " + forms + "%0D%0ABack office: " + back 
    + "%0D%0AWorks offline: " + online + "%0D%0AOperative Sistem (ignore if website project)" + os + "%0D%0AFinal Budget: " + orcamento;

    // Endereço de e-mail para o qual o e-mail será enviado
    var destinatario = "a2023135575@alunos.estgoh.ipc.pt";

    // Assunto do e-mail
    var assunto = "[Website | Mobile App] Pedido de Orçamento";  

    // link de e-mail com os parâmetros apropriados
    var linkEmail = "mailto:" + destinatario + "?subject=" + assunto + "&body=" + corpoEmail;

    // Redirecione para o link de e-mail
    window.location.href = linkEmail;
}




function enviaremailqualquer() {



    var nome = document.getElementById('nome').value;
    var subject = document.getElementById('subject').value;
    var message= document.getElementById('message').value;

   
    var corpoEmail = "Name: " + nome + "%0D%0AMessage: " + message;


    var destinatario = "a2023135575@alunos.estgoh.ipc.pt";

  


    var linkEmail = "mailto:" + destinatario + "?subject=" + subject + "&body=" + corpoEmail;

   
    window.location.href = linkEmail;

    var formulariof = document.getElementById("formulariof");
    formulariof.style.display = "none";
}
