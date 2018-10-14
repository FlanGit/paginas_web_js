Proyecto Web Pais / Región 
Estructura HTML
Head: elementos necesarios y todos los metadatos que conozcas
Body: Estructuta semantica
Header y menu
Secciones:
Inicio
1 imagen grande
1 tabla
Geografia (1 imagen)
Historia (1 imagen)
Economia (1 imagen)
About (Archivo independiente)
Footer: datos de autoria y copi
Address con formato h card

Estilo
RWD -> mobile-first
Mínimo 3 MediaQueries

PONER -----------------------------------
body, h1, h2, figure, nav ul, nav li {
    margin: 0;
    padding: 0;
}
---------css del profe --------------------------------
/* Reset */
* {
    box-sizing: border-box;
}
body, h1, h2, figure, ul, li {
    margin: 0;
    padding: 0;
}
nav a {
    text-decoration: none;
    color: inherit;
}
section {
     min-height: 60vh;
}

/* MediaQuery 0: Mobile */

.main_wrapper {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

img {
    width: 100%;
}

@media screen and (min-width: 650px) {
    .main_wrapper {
       width: 80%; 
    }


}

@media screen and (min-width: 990px) {
    .main_wrapper {
       width: 60%; 
       max-width: 800px;
    }
}