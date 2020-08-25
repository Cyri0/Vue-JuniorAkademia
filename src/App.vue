<template>
  <div id="app">
    <vue-headful title="Junior Akadémia"/>
    <nav class="navbar navbar-expand-xl navbar-light" id="navbar">
      <a class="navbar-brand" href="#">
        <img class="navbar_logo" src="./assets/logo.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" style="text-align: center;">
          <li class="nav-item">
            <router-link to="/">Főoldal</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">Rólunk</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/matric">Felvételi előkészítők</router-link>
          </li>
         
          <!-- <li class="nav-item">
            <router-link to="/camp">Táborok</router-link>
          </li> -->

          
        <li class="nav-item">
          <router-link to="/orientation">Pályaorientáció</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/robotics">Robotika</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/languages">Nyelvek</router-link>
        </li>
        </ul>
        <router-link to="/apply" tag="button" class="apply_btn">Jelentkezés</router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

:root {
  --my_green: #64b350;
  --my_purple: #963cba;
  --my_blue: #34a4dd;
}

.page {
  width: 100vw;
  min-height: calc(100vh - 130px);
  position: absolute;
}

.green_font {
  color: var(--my_green);
}

.blue_font {
  color: var(--my_blue);
}

.purple_font {
  color: var(--my_purple);
}

.blue_page {
  background-color: var(--my_blue);
}

.green_page {
  background-color: var(--my_green);
}

.purple_page {
  background-color: var(--my_purple);
}

.board {
  width: 95vw;
  min-height: 600px;
  background-color: white;
  margin: auto;
  margin-top: 50px;

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
}

.title {
  text-align: center;
  font-family: "Audiowide", cursive;
  padding-top: 25px;
}

@media screen and (max-width: 650px) {
  .title {
    font-size: 24px;
  }
}

.navbar_logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-item {
  font-family: "Audiowide", cursive;
  margin: auto;

  font-size: 18px;

  line-height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}

.nav-item a {
  transition: 0.5s;
  color: gray;
  text-decoration: none;
}

.nav-item a:hover {
  color: rgb(37, 37, 37);
  text-decoration: none;
}

.apply_btn {
  background-color: rgba(255, 255, 255, 0);
  border: 3px solid var(--my_green);
  color: var(--my_green);
  font-family: "Audiowide", cursive;
  max-width: 250px;
  margin: auto;
}

#navbar{
  height: 130px;
}

.apply_btn:hover {
  background-color: var(--my_green);
  color: white;
}

#navbarSupportedContent {
  margin-left: 15vw;
}

@media screen and (max-width: 1482px) {
  #navbarSupportedContent {
    margin-left: 4vw;
  }
}

.mandatory {
  text-align: center;
  color: white;
  margin-top: 20px;
}

.mandatory a {
  color: white;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
