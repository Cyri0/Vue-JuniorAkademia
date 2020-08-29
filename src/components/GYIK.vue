<template>
  <div class="page purple_page">
    <div class="board gyik_board">
      <h1 class="title">Gyakran Ismételt Kérdések</h1>
      <br>

      <div class="accordion" id="accordionExample">
      </div>

      <router-link to="/matric" tag="button" class="back_btn">Vissza</router-link>
    </div>
    <div class="mandatory">
      ©2020 Junior Akadémia
      <br />
      <router-link to="/DataManagementStatement/">ÁSZF és Adatkezelesi Nyilatkozat</router-link>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted: function() {
    var list = [
      {
        question: "Hányszor van egy héten foglalkozás?",
        answer:
          "A felső tagozatosokat tantárgyanként - matematikából és magyarból - hetente 1x 1,5 órás foglalkozásra várjuk."
      },

      {
        question: "Hányan vannak egy csoportban?",
        answer: "Egy csoportban maximum 10 fő van. Csoportjainkat 6 fő jelentkezése esetén indítjuk el."
      },

      {
        question: "Miért jó a kiscsoportos felvételi előkészítő?",
        answer: "<ul>"+
        "<li>    Mert a kiscsoportos foglalkozások nagyban elősegítik a megértést, a feldolgozást és a fejlődést.</li>"+
        "<li>Mert inspirálóan hatnak egymásra a gyerekek</li>"+
        "<li>Mert az otthon megírt felvételi gyakorlósorok soha nem olyan környezetben íródnak, mint az éles felvételik – ezt is szimulálja a kiscsoport</li>"+
        "</ul>"
      },

      {
        question: "Mi kell a sikeres felvételihez?",
        answer: "<ul>"+
        "<li>Értő és logikus problémamegoldás fejlesztése, hasznos trükkök</li>"+
        "<li>A típusfeladatokhoz tartozó megoldási lehetőségek felismerése és hatékony használata</li>"+
        "<li>Időgazdálkodási rutin</li>"+
        "<li>Stresszoldó technikák – a lámpaláz kezelése</li>"+
        "</ul>"
      },

      {
        question: "Miért nálunk?",
        answer: "<ul>"+
        "<li> Módszereinkkel élményalapúan fejlesztjük az összes olyan kompetenciát, amely a sikeres felvételihez szükséges </li>"+
        "<li>Tudjuk, hogy minden hozzánk járó diák egyedi. Mindenki számára elfogadó környezetet biztosítunk, amelyben segítjük őt abban, hogy a határait és a képességeit felismerje és megtalálja az utat ahhoz, hogy ezt a lehető legjobban kitágítsa</li>"+
        "<li>Megtanítjuk őket arra, hogy egy rossz válasz még nem a világvége, és a tévedésekből tanulva tudnak igazán tovább fejlődni. Ettől nő az önbizalmuk, ami az éles felvételi helyzetet stresszmentesebbé teszi a számukra.</li>"+
        "</ul>"
      },

      {
        question: "Mennyibe kerül?",
        answer: "<p>A felső tagozatosok előkészítője matematikából és magyarból is 15 alkalmas. Díja 4 egyenlő részletre elosztva, tantárgyanként havi 13.500 forint - összesen 4 alkalommal számlázunk. Egy összegben kifizetve kedvezményesen 50.000 Ft.</p>" +
        "<p>Fizetés átutalással, elektronikus számla ellenében.</p>"
      },
            {
        question: "Hol vannak a foglalkozások?",
        answer: "Debrecen"
      }
    ];

    for (let i = 0; i < list.length; i++) {
      $("#accordionExample").append(
        '<div class="card"> <div class="card-header" id="heading' +
          i +
          '" ' +  'style="background-color: rgba(87,60,186,0.7);"'  + ' ><h2 class="mb-0"><button class="btn btn-link btn-block text-left question" type="button" ' +
          'data-toggle="collapse" data-target="#collapse' +
          i +
          '" aria-expanded="true" aria-controls="collapse' +
          i +
          '"' + 'style="color: white; font-weight: bold;"' +'> ' +
          list[i].question +
          "</button></h2></div>" +
          '<div id="collapse' +
          i +
          '" class="collapse" aria-labelledby="heading' +
          i +
          '" data-parent="#accordionExample" > <div class="card-body">' +
          list[i].answer +
          "</div> </div> </div>"
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-top: 150px;
  text-align: center;
}

.back_btn {
  transition: 0.5s;
  color: white;
  width: 150px;
  height: 50px;
  font-size: 25px;
  border: none;
  background-color: #64b350be;
  margin-left: calc(50% - 75px);
  margin-top:20px;
  margin-bottom:20px;
}

.back_btn:hover {
  transition: 0.5s;
  background-color: var(--my_green);
}

.card-header h2 {
  margin-top: 0;
}

.gyik_board {
  max-width: 1300px;
}

/* .question {
  color: black;
  font-family: "Audiowide", cursive;
} */

#accordionExample{
  width: 80%;
  margin: auto;
}

</style>
