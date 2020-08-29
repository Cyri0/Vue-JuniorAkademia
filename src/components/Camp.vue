<template>
  <div class="page blue_page">
    <div class="board transparent">
      <h1 class="title">Táborok</h1>

      <div class="container">
        <div class="post_content">
          <h2 class="title">Hackerman Tábor</h2>
          <p
            class="leiras"
          >Hackerman és többek között egy ZX Spectrum és egy Nintendo Power Glove segítségével visszahekkeli magát a múltba, hogy leszámoljon a náci nagyfőnökkel, ám az utazásba hiba csúszik, és Fury a vikingkorban köt ki, ahol egy lézerszemű raptor támadja meg.</p>
          <div class="price">Ár: 28.000 Ft/hét</div>
          <router-link to="/" tag="button" class="apply_btn camp_btn info_btn">Információk</router-link>
          <router-link to="/" tag="button" class="apply_btn camp_btn">Jelentkezés</router-link>
        </div>
        <div class="post_img" id="camp1"></div>
      </div>

      <div class="container">
        <div class="post_content">
          <h2 class="title">Laposföld Tábor</h2>
          <p class="leiras">
            Az egyik leggyakrabban érkező érv a laposföld-hívőktől, hogy nem látjuk azt,
            hogy a Föld valóban gömb alakú lenne. Következésképpen: a Föld lapos.
          </p>
          <div class="price">Ár: 2.300 Ft/hét</div>
          <router-link to="/" tag="button" class="apply_btn camp_btn info_btn">Információk</router-link>
          <router-link to="/" tag="button" class="apply_btn camp_btn">Jelentkezés</router-link>
        </div>
        <div class="post_img" id="camp2"></div>
      </div>

      <div class="container">
        <div class="post_content">
          <h2 class="title">MrRobot Tábor</h2>
          <p
            class="leiras"
          >Nappal hálózatfejlesztő/kiberbiztonsági szakértő az Allsafe nevű vállalatnál, éjszaka hacker, akinek feltett szándéka igazságot szolgáltatni. Ilyenkor llegális weboldalak, szolgáltatások üzemeltetőit vagy éppen hűtlen szeretőket buktat le, de később megtudjuk, hogy ennél sokkal nagyobb terve is van.</p>
          <div class="price">Ár: 37.000 Ft/hét</div>
          <router-link to="/" tag="button" class="apply_btn camp_btn info_btn">Információk</router-link>
          <router-link to="/" tag="button" class="apply_btn camp_btn">Jelentkezés</router-link>
        </div>
        <div class="post_img" id="camp3"></div>
      </div>

      <div class="placeholder"></div>
    </div>
    <div class="mandatory">
      ©2020 Junior Akadémia
      <br />
      <router-link to="/DataManagementStatement/">ÁSZF és Adatkezelesi Nyilatkozat</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  padding: 0;
  min-height: 350px;
  max-width: 800px;
  margin-top: 30px;
  margin-bottom: 30px;

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
}

.post_content {
  width: 60%;
  height: 350px;
  background-color: #fff;
  float: left;
  padding: 20px;
}

.post_img {
  width: 40%;
  height: 350px;
  background-color: lightblue;
  float: right;
  background-size: cover;
  background-repeat: none;
  background-position: center;
}
.placeholder {
  width: 100%;
  height: 50px;
}

.leiras {
  height: 150px;
  padding-left: 20px;
}

#camp1 {
  background-image: url("../assets/pics/camp2.jpg");
}
#camp2 {
  background-image: url("../assets/pics/camp3.jpg");
}
#camp3 {
  background-image: url("../assets/pics/camp1.jpg");
}

@media screen and (max-width: 600px) {
  .post_content {
    width: 100%;
    float: right;
  }
  .post_img {
    width: 100%;
    float: left;
    background-position: top;
  }
}

.camp_btn {
  float: right;
  margin-right: 20px;
}

.price {
  width: 100%;
  margin-bottom: 10px;
  padding-left: 15px;
  font-size: 14pt;
  font-family: "Audiowide", cursive;
}

.info_btn {
  margin: 0;
  float: left;
  margin-left: 10px;
  border: none;
  color: var(--my_purple);
  padding: 3px;
  border: 3px solid rgba(255, 255, 255, 0);
}

.info_btn:hover {
  background-color: var(--my_purple);
  color: white;
  border: 3px solid var(--my_purple);
}

h2 {
  margin-top: 0;
  padding-top: 0;
}

.transparent {
  background-color: rgba(255, 255, 255, 0);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0);
}

.transparent h1 {
  color: white;
}
</style>
