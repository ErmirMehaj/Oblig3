package com.example.obligg3;

import org.springframework.beans.propertyeditors.StringTrimmerEditor;

public class Kunde {
    private String film, fornavn, etternavn, telefonnr, epost;
    private int antall;

    // Konstruktør for å opprette en Kunde med alle feltene
    public Kunde(String film, String fornavn, String etternavn, String telefonnr, String epost, int antall){
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
        this.antall = antall;
    }


    // Den tomme konstruktøren tillater å lage en ny Kunde uten å gi den noen startverdier.
    public Kunde(){

    }


    // Getter og setter metoder for hvert felt i Kunde-objektet
    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}


