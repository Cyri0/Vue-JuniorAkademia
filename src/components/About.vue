<template>
  <div class="page green_page">
    <div class="board" id="about_board">
      <h1 class="title">Rólunk</h1>

      <div class="container centered">
        <div class="row">
          <div class="col-md-6 col-lg-8 highlighted">
            <p>
              A középiskolai felvételi előtti évek, hónapok nagyon izgalmas időszakot és kihívást jelentenek a szülőknek, gyerekeknek egyaránt.
              Kétgyermekes édesanyaként jómagam is átéltem és még fogom is, ezt a felkészülési periódust. Akárcsak a gyermekeink mi is ugyanúgy izgulunk,
              hogy sikerüljön bekerülni a kiválasztott középiskolába. Sokszor éreztem úgy: jól jött volna valami plusz támogatás a gyerekemnek is és nekem is.
            </p>
            <p>Ezzel kapcsolatos érzéseimet, gondolataimat az is megerősítette, hogy a Logiscool Debrecen tulajdonosaként az elmúlt években sok szülővel és gyermekkel kerültem kapcsolatba. A beszélgetéseink során kiderült, mások is úgy érzik, hogy nagy igény lenne kis csoportos középiskolai felvételi előkészítőkre. A szülők örülnének annak is, ha segítséget kaphatnának a középiskolák kiválasztásában, valamint abban, hogy megfelelően tudják támogatni a gyerekeket a tanulásban, vagy akár az önbizalmuk megerősítésében.</p>
            <p>Több éves külföldi élet tapasztalata szerint, az iskolai nyelvtanulást is érdemes kiegészíteni, így erre is szeretnénk lehetőséget biztosítani.</p>
            <p>Kiváló, több éves tapasztalattal rendelkező pedagógus kollégákkal összefogva úgy döntöttünk: belevágunk</p>

            <p class="right name">Borbély Aranka</p>
            <p class="right titulus">iskolavezető</p>
          </div>

          <div class="col-md-6 col-lg-4 picsholder">
            <div class="profile_pics" id="pics2"></div>
          </div>

          <div class="col-s col-lg-12 placeholder"></div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile1"></div>
            <h4>Csáki Fruzsina</h4>
            <h5>Lilla Téri Általános Iskola, angol műveltségi terület</h5>
          </div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile2"></div>
            <h4>Sirola Marcella</h4>
            <h5>BSZC Veress Péter Gimnázium, matematika-német szakos tanár, gyógypedagógus</h5>
          </div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile3"></div>
            <h4>Dániel Szandra</h4>
            <h5>Lilla Téri Általános Iskola - magyar műveltségi terület, fejlesztő pedagógus</h5>
          </div>

          <div class="col-md-6 col-lg-3 minipics_holder">
            <div class="minipics" id="miniprofile4"></div>
            <h4>Nagy Dániel</h4>
            <h5>mechatronikai mérnök</h5>
          </div>
          <div class="col-s col-lg-12 placeholder"></div>
          <div class="col-s col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.7325308953814!2d21.61244861597832!3d47.53407007917999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470e08ed27d2b7%3A0x254e775fd860e36!2sDebrecen%2C%20Mester%20u.%2039%2C%204026!5e0!3m2!1shu!2shu!4v1598099693757!5m2!1shu!2shu"
              class="map"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-s col-lg-6">
            <h2>Lépj velünk kapcsolatba!</h2>
            <form
              class="form-group"
              @submit.prevent="sendEmail"
              v-bind:class="{ hide: !formVisible}"
            >
              <label for="name">Név</label>
              <input type="name" class="form-control" name="name" />
              <label for="email">Email</label>
              <input type="email" class="form-control" name="email" />
              <label for="message">Üzenet</label>
              <textarea class="form-control" name="message"></textarea>
              <input type="submit" class="btn btn-success send_btn" value="Elküldöm" />
            </form>
            <div class="fade-in" v-bind:class="{ hide: !messageSent}">
              <img src="../assets/sent.png" class="sent_icon" />
              <h2 class="sent_text success">Az üzenet sikeresen elküldve!</h2>
            </div>

            <div class="fade-in" v-bind:class="{ hide: !failedSent}">
              <img src="../assets/fail.png" class="sent_icon" />
              <h2 class="sent_text fail">
                Nem sikerült elküldeni az üzenetet!
                <br />Próbálkozz újra később, vagy próbáld meg a
                <a
                  href="https://www.facebook.com/Junior-Akad%C3%A9mia-107904784359368"
                >facebook oldalunkon</a>!
              </h2>
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
import emailjs from "emailjs-com";
import my_data from "../my_data.json";

export default {
  data() {
    return {
      formVisible: true,
      messageSent: false,
      failedSent: false
    };
  },

  methods: {
    sendEmail: function(e) {
      emailjs
        .sendForm(
          my_data[0].SERVICE_ID,
          my_data[0].TEMPLATE_ID_MESSAGE,
          e.target,
          my_data[0].USER_ID
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            this.messageSent = true;
            this.formVisible = false;
            return true;
          },
          error => {
            console.log("FAILED...", error);
            this.failedSent = true;
            this.formVisible = false;
            return false;
          }
        );
    }
  }
};
</script>
<style scoped>
.centered {
  margin: auto;
  max-width: 800px;
}

.title {
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

.minipics_holder h4 {
  font-size: 26px;
  margin-top: 20px;
}

.minipics_holder h5 {
  font-size: 16px;
  padding: 20px;
  color: rgb(94, 93, 93);
  text-align: center;
  padding-top: 0px;
}

.profile_pics {
  margin: 0;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: none;
  background-position: center;
}

#about_board {
  max-width: 1300px;
}

.hide {
  display: none;
}

#pics2 {
  background-image: url("../assets/pics/profile2.jpg");
}

h4 {
  text-align: center;
}

label {
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 20px;
}

.right {
  text-align: right;
}

.name {
  font-weight: bold;
  margin-bottom: -5px;
}

.titulus {
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

.form-group button {
  margin-top: 20px;
  float: right;
}

.map {
  width: 100%;
  height: 300px;
}

.sent_icon {
  width: 160px;
  margin-left: calc(50% - 80px);
}
.sent_text {
  font-size: 24px;
  text-align: center;
}

.success {
  color: var(--my_green);
}

.fail {
  color: darkred;
}

.send_btn {
  float: right;
  margin-top: 20px;
}

@media screen and (max-width: 991px) {
  .map {
    max-width: 350px;
    min-height: 350px;
    margin-left: calc(50% - 175px);
    margin-bottom: 50px;
  }

  .form-group button {
    margin-top: 20px;

    width: 200px;
    height: 60px;
    float: right;
  }
}
</style>
