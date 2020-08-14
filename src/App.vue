<template>
  <div id="app">
    <nav class="navbar navbar-expand-xl navbar-light" id="navbar">
    <a class="navbar-brand" href="#"><img class="navbar_logo" src="./assets/logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <li class="nav-item">
          <router-link to="/camp">Táborok</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/orientation">Pályaválasztás</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/robotics">Robotika</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/languages">Nyelvek</router-link>
        </li>
      </ul>
        <button class="apply_btn" onclick="window.open('apply.html','_self')">Jelentkezés</button>
    </div>
  </nav>
    <router-view/>

    <div class="basics">
      ©2020 Junior Akadémia <br>
      <a href="#">ÁSZF</a>
      <a href="#">Adatkezelési Nyilatkozat</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

:root {
      --my_green: #64B350;
      --my_purple: #963CBA;
      --my_blue: #34A4DD;
  }

.navbar_logo{
    width: 150px;
    margin-left: 20px;
    margin-right: 20px;
}

.nav-item{
    font-family: 'Audiowide', cursive;
    margin: auto;
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

.apply_btn{
    background-color: rgba(255, 255, 255, 0);
    border: 3px solid var(--my_green);
    color: var(--my_green);
    font-family: 'Audiowide', cursive;
    max-width: 250px;
    margin: auto;
}

.apply_btn:hover{
    background-color: var(--my_green);
    color: white;
}

#navbarSupportedContent{
    margin-left: 15vw;
}


@media screen and (max-width: 1482px){
    #navbarSupportedContent{
        margin-left: 4vw;
    }
}

</style>
