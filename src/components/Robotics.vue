<template>
  <div class="page purple_page">
    <div class="board">
      <h1 class="title">Mérnöki Alapozó</h1>

      <div class="container">
        <div class="row">
          <div class="col-md-12" id="head_kep"></div>
          <div class="col-md-12" id="head_text">
            <!-- <h2>Kezdő és haladó tanfolyamok alsó és felső tagozatosoknak</h2> -->
            <p>Korunk meghatározó iparágainak fontos része a mérnöki szakma . Ebben a kurzusban a gyerekek ennek az alapjait ismerhetik meg gyakorlatban Lego robotok építésével, programozásával, valós problémák megoldásával.</p>
            <p>Fontos szerepet kap a kurzusban a csapatmunka, hiszen akik ilyen területen fognak elhelyezkedni a későbbiekben, azok számára ez elengedhetetlen.</p>

            <br><br>

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

.container {
  max-width: 800px;
}

h1 {
  color: white;
  margin-bottom: 20px;
}

#head_text {
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 30px;
  margin-top: 0px;
}

#head_text p {
  font-size: 18px;
}

#head_kep {
  border-radius: 10px 10px 0px 0px;
  height: 40vw;
  max-height: 400px;
  background-image: url("../assets/pics/lego1.jpg");
  background-size: cover;
  background-position: center;
  margin-bottom: 0px;
}

.gyik_btn {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.8);
  border: 3px solid rgba(255, 255, 255, 0.8);
  margin-left: 20px;
  line-height: 40px;
  font-size: 20px;
  float: left;
}

.reg_btn {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.8);
  border: 3px solid rgba(255, 255, 255, 0.8);
  margin-right: 20px;
  line-height: 40px;
  font-size: 20px;
  float: right;
}

.gyik_btn,
.reg_btn {
  width: 180px;
}

.gyik_btn:hover,
.reg_btn:hover {
  width: 180px;
    color: white;
  border: 3px solid white;
}

@media screen and (max-width: 500px) {
  .gyik_btn,
  .reg_btn {
    font-size: 16px;
    margin-right: 0px;
    margin-left: 0px;
    width: 45%;
  }
}

@media screen and (max-width: 350px) {
  .gyik_btn {
    width: 80px;
  }
  .reg_btn {
    width: calc(100% - 80px - 20px);
  }
}
</style>
