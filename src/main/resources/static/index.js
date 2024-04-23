function Billetter() {
    // Oppretter et objekt med bestillingsinformasjon basert på verdier fra input-feltene
    const Bestilling = {
        film: $("#bestilling").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val(),
    }
    // Henter verdier fra input-feltene individuelt
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    // Utfører validering for hver inndata og lagrer resultatene som boolske variabler
    let antallValid = antall !== "" && !isNaN(antall) && antall > 0;
    let fornavnValid = fornavn !== "";
    let etternavnValid = etternavn !== "";
    let telefonnrValid = telefonnr !== "" && !isNaN(telefonnr) && telefonnr.length === 8;
    let epostpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // epostvalidering fra: https://www.geeksforgeeks.org/javascript-program-to-validate-an-email-address/
    let epostValid = epostpattern.test(epost);

    // Hvis all validering er vellykket, sendes bestillingsinformasjonen til serveren
    if (antallValid && fornavnValid && etternavnValid && telefonnrValid && epostValid){

        $.post("/lagre", Bestilling, function() {
            hentBilletter(); // Etter at bestillingen er lagret, oppdateres visningen av billettene
        });
        // Tømmer input-feltene
        $("#bestilling").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    }
    // Hvis validering feiler, vises feilmeldinger for relevante inndata
    else {
        if (antall === "") {
            document.getElementById("feilmelding_antall").innerText = "Fyll inn antallet";
        } else if (antallValid === false) {
            document.getElementById("feilmelding_antall").innerText = "Ugyldig antall";
        } else {
            document.getElementById("feilmelding_antall").innerText = "";
        }
        if (fornavn === "") {
            document.getElementById("feilmelding_fornavn").innerText = "Fyll inn fornavnet";
        } else if (fornavnValid === false) {
            document.getElementById("feilmelding_fornavn").innerText = "Ugyldig fornavn";
        } else {
            document.getElementById("feilmelding_fornavn").innerText = "";
        }
        if (etternavn === "") {
            document.getElementById("feilmelding_etternavn").innerText = "Fyll inn etternavnet";
        } else if (etternavnValid === false) {
            document.getElementById("feilmelding_etternavn").innerText = "Ugyldig etternavn";
        } else {
            document.getElementById("feilmelding_etternavn").innerText = "";
        }
        if (telefonnr === "") {
            document.getElementById("feilmelding_telefonnr").innerText = "Fyll inn telefonnummeret";
        } else if (telefonnrValid === false) {
            document.getElementById("feilmelding_telefonnr").innerText = "Ugyldig telefonnummer";
        } else {
            document.getElementById("feilmelding_telefonnr").innerText = "";
        }
        if (epost === "") {
            document.getElementById("feilmelding_epost").innerText = "Fyll inn eposten";
        } else if (!epostValid) {
            document.getElementById("feilmelding_epost").innerText = "Ugyldig epost";
        } else {
            document.getElementById("feilmelding_epost").innerText = "";
        }
    }
}

// Henter billettdata fra serveren og formaterer det for visning
function hentBilletter(){
    $.get("/hent", function (billetter){
        formaterData(billetter);
    });
}

// Formaterer billettdata for visning i en tabell. Denne delen viser oppsettet på hvordan skjemaet ser ut
function formaterData(billetter) {

    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";
    for (const billett of billetter) {
        ut += "<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td</tr>";

    }
    ut += "</table>";
    $("#billettene").html(ut);
}

// Sletter alle billetter fra serveren og oppdaterer visningen av billettene
function slettAlle(){
    $.get("/slett", function(){
        hentBilletter();
    });
}




