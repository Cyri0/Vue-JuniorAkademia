<template>
  <div class="page blue_page">
    <div class="board landing_board">
      <h1 class="title blue_font" id="title">
        Üdvözöl a
        <strong class="purple_font">Junior Akadémia</strong>
      </h1>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" id="pics1"></div>
          <div class="carousel-item" id="pics2">
            <div class="description">
              <h2>Felvételi előkészítők</h2>
              <p>4.-8. osztályos gyerekeknek</p>
              <p>A középiskolai felvételi előkészítő foglalkozásaink alatt a felvételi feladatsorok kérdéseinek megfelelő kompetenciákat is fejlesztjük. Ilyen például a logikai problémafelismerő és megoldó képesség.</p>
            </div>
          </div>
          <div class="carousel-item" id="pics3">
            <div class="description">
              <h2>Nyári táborok</h2>
              <p>Nyári táborainkban tematikus programokkal várjuk a különböző érdeklődési körrel rendelkező gyerekeket befejezett első osztályos kortól.</p>
              <p>Változatos és egészséges étkezés, szabadidős programok.</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
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
:root {
  --my_green: #64b350;
  --my_purple: #963cba;
  --my_blue: #34a4dd;
}

.landing_board {
  margin-top: 112px;
}

#navbarSupportedContent {
  margin-left: 15vw;
}

.subscribe_btn {
  float: right;
  margin-right: 20px;
  margin-top: 400px;
  width: 192px;
  height: 72px;
  color: var(--my_green);
  border: 3px solid var(--my_green);
  background-color: rgba(255, 255, 255, 0.5);
  font-family: "Audiowide", cursive;
  font-size: 18px;
  border-radius: 10px;
}

.subscribe_btn:hover {
  background-color: var(--my_green);
  color: white;
}

.carousel {
  width: 80vw;
  min-width: 500px;
  max-width: 1000px;
  margin: auto;
}

.carousel-item {
  background-color: gray;
  height: 500px;
  background-size: cover;
  background-position: center;
}

#pics1 {
  background-image: url("../assets/carousel/pics1.jpg");
}
#pics2 {
  background-image: url("../assets/carousel/pics2.jpg");
}
#pics3 {
  background-image: url("../assets/carousel/pics3.jpg");
}

.description {
  width: 40%;
  height: 85%;
  margin-top: 2.5%;
  margin-right: 100px;
  float: right;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50px 0px 50px 0px;
  padding: 15px;
}

.description h2 {
  margin-top: 90px;
  margin-bottom: 20px;
}

@media screen and (max-width: 750px) {
  .description h2 {
    
    margin-top: 90px;
    margin-bottom: 10px;
    font-size: 20px;
  }

  .description {
    width: 55%;
    margin-top: 20px;
    margin-right: 50px;
  }

  .description p {
    font-size: 12px;
  }
}

@media screen and (max-width: 500px) {
  .description h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
  }

  .description p {
    font-size: 11px;
  }
}

@media screen and (max-width: 650px) {
  .subscribe_btn {
    margin-top: 50px;
  }

  .carousel {
    min-width: 90vw;
  }

  .carousel-item {
    height: 400px;
  }
}
</style>
