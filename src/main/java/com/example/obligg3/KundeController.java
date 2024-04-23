package com.example.obligg3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class KundeController {

    @Autowired
     KundeRepository rep;

    @PostMapping("/lagre")
    public void lagre(Kunde innKunde) {
        rep.lagreKunde(innKunde);
    }
    @GetMapping("/hent")
    public List<Kunde>hentBilletter(){
        return rep.hentAlleKunder();
    }
    @GetMapping("/slett")
    public void slettAlle(){
        rep.slettAlleKunder();
    }

}