package com.example.obligg3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRepository {

    @Autowired
    private JdbcTemplate db;

    // Metode for å lagre en ny kunde i databasen
    public void lagreKunde(Kunde kunde){
        String sql = "INSERT INTO Kunde (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, kunde.getFilm(), kunde.getAntall(), kunde.getFornavn(), kunde.getEtternavn(), kunde.getTelefonnr(), kunde.getEpost());
    }

    // Metode for å hente alle kunder fra databasen
    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT * FROM Kunde ORDER BY etternavn";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return alleKunder;
    }

    // Metode for å slette alle kunder fra databasen
    public void slettAlleKunder(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }
}
