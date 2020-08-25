<template>
  <div class="page green_page">
    <div class="board">
      <h1 class="title">Rólunk</h1>

      <div class="container centered">
        <div class="row">
        <!--  
          <div class="col-md-6 col-lg-4 picsholder">
            <div class="profile_pics" id="pics1"></div>
          </div>
          <div class="col-md-6 col-lg-8 highlighted">
            <h3 class="title">Jane Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat aliquet magna quis pharetra. Aliquam erat volutpat.
              Curabitur sollicitudin vitae neque sed consequat. Sed est ipsum, rutrum et libero in, ullamcorper dictum diam. Morbi rhoncus orci ex,
              a venenatis nisi aliquet vel.
            </p>

            <p>
              Integer consequat ornare magna ac laoreet. Maecenas nec nisi diam. Integer pretium dui ligula, vel dignissim felis commodo in.
              Pellentesque vitae nisl eleifend, sollicitudin neque vel, dapibus magna. Maecenas sit amet hendrerit ex. Aliquam erat volutpat.
            </p>
          </div>
          -->

          <div class="col-md-6 col-lg-8 highlighted">
            <!-- <h3 class="title">Borbély Aranka</h3> -->

            <p>
              A középiskolai felvételik nagy izgalmat és kihívást jelentenek a szülőknek és a gyerekeknek egyaránt. Három gyermekes édesanyaként jómagam már háromszor éltem meg ezt a felkészülési időszakot. Mindhárom alkalommal ugyanúgy izgultam, hogy a gyerekeimnek sikerüljön bekerülni a kiválasztott középiskolába. Sokszor éreztem úgy: jól jött volna valami plusz támogatás a gyerekeimnek is és nekem is.
Ezekben a gondolatokban az is megerősített, hogy a Logiscool Dunakeszi tulajdonosaként az elmúlt években sok szülővel és gyerekkel kerültem kapcsolatba. A beszélgetéseink során kiderült, mások is úgy érzik, hogy nagy igény lenne kis csoportos középiskolai felvételi előkészítőkre. A szülőknek örülnének annak is, ha segítséget kaphatnának a középiskolák kiválasztásában, valamint abban, hogy megfelelően tudják támogatni a gyerekeket a tanulásban, vagy akár az önbizalmuk megerősítésében.

            </p>

            <p>
Kiváló, nagy tapasztalattal rendelkező pedagógus kollégákkal összefogva 2019. szeptemberében úgy döntöttünk: belevágunk. Az elmúlt egy év eredményei azt mutatják: nem hiába.
            </p>

            <p class="right name">Borbély Aranka</p>
            <p class="right titulus">iskolavezető</p>

          </div>

          <div class="col-md-6 col-lg-4 picsholder">
            <div class="profile_pics" id="pics2"></div>
          </div>

          <div class="col-s col-lg-12 placeholder"></div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile1"></div>
            <h4>Johnny English</h4>
          </div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile2"></div>
            <h4>Johnny English</h4>
          </div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile3"></div>
            <h4>Johnny English</h4>
          </div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile4"></div>
            <h4>Johnny English</h4>
          </div>
          <div class="col-s col-lg-12 placeholder"></div> 
          <div class="col-s col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.7325308953814!2d21.61244861597832!3d47.53407007917999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470e08ed27d2b7%3A0x254e775fd860e36!2sDebrecen%2C%20Mester%20u.%2039%2C%204026!5e0!3m2!1shu!2shu!4v1598099693757!5m2!1shu!2shu" class="map" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="col-s col-lg-6">
            
            <h2>Lépj velünk kapcsolatba!</h2>
            <div class="form-group">
              <label for="">Név</label>
              <input type="name" class="form-control" name="name" id="" placeholder="">
              <label for="">Email</label>
              <input type="email" class="form-control" name="email" id="" placeholder="">
              <label for="">Üzenet</label>
              <textarea class="form-control"></textarea>

              <button class="btn btn-success" type="submit" value="Submint">Elküldöm</button>
            </div>

          </div>

          <div class="col-s col-lg-12 placeholder"></div>

        </div>
      </div>
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
<style scoped>
.centered {
  margin: auto;
  max-width: 800px;
}

.title{
    padding-bottom: 20px;
}

.picsholder {
  padding: 0;
}

.placeholder {
  height: 100px;
}

.minipics_holder {
  padding: 0;
  margin-top: 20px;
}

.profile_pics {
  margin: 0;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: none;
  background-position: center;
}

#pics1 {
  background-image: url("../assets/pics/profile1.jpg");
}
#pics2 {
  background-image: url("../assets/pics/profile2.jpg");
}

h4 {
  text-align: center;
}

.right{
  text-align: right;
}

.name{
  font-weight: bold;
  margin-bottom: -5px;
}

.titulus{
  margin-right: 15px;
}

.minipics {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: lightgray;
  margin: auto;

  background-size: cover;
  background-repeat: none;
  background-position: center;
}

#miniprofile1 {
  background-image: url("../assets/pics/minipics1.jpg");
}
#miniprofile2 {
  background-image: url("../assets/pics/minipics2.jpg");
}
#miniprofile3 {
  background-image: url("../assets/pics/minipics3.jpg");
}
#miniprofile4 {
  background-image: url("../assets/pics/minipics4.jpg");
}

.form-group button{
  margin-top: 20px;
  float: right;
}

.map{
  width: 100%;
  height: 300px;
}

@media screen and (max-width:991px) {
  .map {
    max-width: 350px;
    min-height: 350px;
    margin-left: calc(50% - 175px);
    margin-bottom: 50px;
  }

  .form-group button{
  margin-top: 20px;

  width: 200px;
  height: 60px;
  float: right;
  }
}
</style>
