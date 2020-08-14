<template>
  <div class="page blue_page">
    <div class="board">
      <h1 class="title">Táborok</h1>

      <div class="container">
        <div class="post_content">
          <h2 class="title">Hackerman Tábor</h2>
          <p class="leiras">Hackerman és többek között egy ZX Spectrum és egy Nintendo Power Glove segítségével visszahekkeli magát a múltba, hogy leszámoljon a náci nagyfőnökkel, ám az utazásba hiba csúszik, és Fury a vikingkorban köt ki, ahol egy lézerszemű raptor kiiktatását követően megismerkedik Barbariannával. </p>
          <router-link to="/" tag="button" class="apply_btn camp_btn">Jelentkezés</router-link>
        </div>
        <div class="post_img" id="camp1"></div>
      </div>

      <div class="container">
        <div class="post_content">
          <h2 class="title">Laposföld Tábor</h2>
          <p class="leiras">Az egyik leggyakrabban érkező érv a laposföld-hívőktől, hogy nem látjuk azt, 
              hogy a Föld valóban gömb alakú lenne. Következésképpen: a Föld lapos. </p>
          <router-link to="/" tag="button" class="apply_btn camp_btn">Jelentkezés</router-link>
        </div>
        <div class="post_img" id="camp2"></div>
      </div>

      <div class="container">
        <div class="post_content">
          <h2 class="title">MrRobot Tábor</h2>
          <p class="leiras">Nappal hálózatfejlesztő/kiberbiztonsági szakértő az Allsafe nevű vállalatnál, éjszaka hacker, akinek feltett szándéka igazságot szolgáltatni. Ilyenkor llegális weboldalak, szolgáltatások üzemeltetőit vagy éppen hűtlen szeretőket buktat le, de később megtudjuk, hogy ennél sokkal nagyobb terve is van.</p>
          <router-link to="/" tag="button" class="apply_btn camp_btn">Jelentkezés</router-link>
          
        </div>
        <div class="post_img" id="camp3"></div>
      </div>

      <div class="placeholder"></div>
    </div>
    <div class="mandatory">
      ©2020 Junior Akadémia
      <br />
      <router-link to="/DataManagementStatement/aszf">ÁSZF</router-link>
      <router-link to="/DataManagementStatement/adatkezelesinyilatkozat">Adatkezelési Nyilatkozat</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 0;
  min-height: 300px;
  max-width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
}

.post_content {
  width: 60%;
  height: 300px;
  background-color: #fff;
  float: left;
  padding: 20px;
}

.post_img {
  width: 40%;
  height: 300px;
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

.leiras{
    height: 150px;
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
.post_content{
    width: 100%;
    float: right;
}
.post_img{
    width: 100%;
    float: left;
    background-position: top;
}
}

.camp_btn{
    float: right;
    margin-right: 20px;
}
</style>
