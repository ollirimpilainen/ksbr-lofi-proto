# KSBR · lo-fi-prototyyppi

Klikattava prototyyppi ksbr.fi:n uudesta sivustosta lo-fi-tasolla. Sivut ovat GRK lo-fi -kankaan KSBR-sivulta. Ne käyttävät samoja lohkoja kuin GRK:n prototyyppi, mutta KSBR:n mittoja ja korostusväriä. Rakenne, sisältö ja lohkot ovat sovitut, visuaalinen ilme tehdään myöhemmin. Kuvat ovat paikkamerkkejä; kaaviot ja ikonit näkyvät.

Staattiset HTML-sivut, ei build-vaihetta. Julkaisupeili esittelyä varten, ei näy hakukoneissa (`noindex` ja `robots.txt`).

## Sivut

Etusivu, Tuulivoima, Teollisuus, Betonirakentaminen ja paikallavalu, Referenssit, Lestijärven tuulipuisto (referenssi), Talvibetonointi (artikkeli), Ura, KSBR (meistä), Suunnitteluyhteistyö, Toteutusmallit, Laatu, turvallisuus ja sertifikaatit, Yhteystiedot, Yhteyshenkilöt ja Tarjouspyyntö.

Linkki sivulle, jota ei vielä ole, avaa tyhjän sivun sivun nimellä. Toiminnot (haku, lataukset) näyttävät ilmoituksen. Lomakkeet eivät lähetä tietoja.

GRK:n prototyyppi: https://ollirimpilainen.github.io/grk-lofi-proto/

## Päivitys

Sivut generoidaan kankaan tiedostoista: `GRK/multisite/tools/ksbr_proto.py <kankaan project> <assetit> <archivo.woff2> <navigaatio-proto/index.html> <kohde>`.
