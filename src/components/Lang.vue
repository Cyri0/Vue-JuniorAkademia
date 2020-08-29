<template>
  <div class="page blue_page">
    <div class="board">
      <h1 class="title">Nyelvek</h1>

      <div class="container">
        <div class="row">
          <div class="col-md-12" id="head_kep"></div>
          <div class="col-md-12" id="head_text">
            <h2>Kezdő és haladó tanfolyamok alsó és felső tagozatosoknak</h2>
            <p>
              A nyelvi tanfolyamok igazodnak a diákok iskolában tanult és megszerzett tudásához, ahhoz, hogy aktuálisan melyik osztályba járnak.
              Kezdő kurzusaink az iskolai angol/német kitűnő kiegészítői is lehetnek.
              A gyerekek megtanulnak angolul/németül helyesen beszélni, elsajátítják a nyelvtant, az írás-olvasást.
              Látványosan fejlődik a nyelvi tudásuk, így az iskolai órákra való felkészülés sem jelent már kihívást.
            </p>
            <p>Tanfolyamaink nyelvi szintek szerint csoportosítva, kiscsoportos bontásban, írásbeli és szóbeli fejlődést biztosítanak az iskolás korosztálynak.</p>
            <p>Alacsony létszámú csoportjainkban, több lehetőség nyílik a nyelvgyakorlásra, illetve az írásos és szóbeli kommunikáció fejlesztésére.</p>
            <p>Módszerünk segít abban, hogy biztos nyelvtudás és sikeres nyelvvizsga legyen a végeredmény.</p>

            <div id="language_holder">
              <div id="english"></div>
              <div id="german"></div>
            </div>

            <router-link to="/apply" tag="button" class="reg_btn">Előjelentkezés</router-link>
            <router-link to="/gyik" tag="button" class="gyik_btn">GYIK</router-link>
          </div>
        </div>
      </div>
    </div>
        <div class="mandatory">
      ©2020 Junior Akadémia
      <br />
      <router-link to="/DataManagementStatement/">ÁSZF és Adatkezelési Nyilatkozat</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.board {
  background-color: rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0);
}

.container{
  max-width: 800px;
}

h1 {
  color: white;
}

#head_text{
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 30px;
  margin-top: 0px;
}

#head_text p {
  font-size: 18px;
}

#head_kep
{
  border-radius: 10px 10px 0px 0px;
  height: 40vw;
  max-height: 400px;
  background-image: url("../assets/english.jpg");
  background-size: cover;
  background-position-x: center;
  margin-bottom: 0px;
}

.gyik_btn{
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 3px solid white;
  margin-left: 20px;
  line-height: 40px;
  font-size: 20px;
  float: left;
}

.reg_btn{
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 3px solid white;
  margin-right: 20px;
  line-height: 40px;
  font-size: 20px;
  float: right;
}

.gyik_btn, .reg_btn {
  width: 180px;
}

@media screen and (max-width: 500px){
  .gyik_btn, .reg_btn {
    font-size: 16px;
    margin-right: 0px;
    margin-left: 0px;
    width: 45%;
}}

@media screen and (max-width: 350px){
  .gyik_btn {
    width: 80px;
  }
  .reg_btn {
    width: calc(100% - 80px - 20px);
  }
}
</style>
