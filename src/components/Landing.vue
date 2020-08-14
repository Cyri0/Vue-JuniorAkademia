<template>
  <div id="landing_page" class="page fade_in_anim">
    <div class="landing_board">
      <h1 class="title blue_font" id="title">
        Üdvözöl a
        <strong class="purple_font">Junior Akadémia</strong>
      </h1>
<!--
      <button
        id="back"
        class="carousel_nav"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      ></button>
      <button
        id="forward"
        class="carousel_nav"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      ></button>

      
      <div class="carousel_img_holder">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          style="width: 100%; height: 100%; margin: 0;"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel_img" ) style="background-image: url('pics/carousel/pics1.jpg')">
                <button class="subscribe_btn" onclick="window.open('subscribe.html','_self')">
                  Feliratkozok a
                  hírlevélre!
                </button>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel_img" ) style="background-image: url('pics/carousel/pics2.jpg')">
                <div class="slide2_content">
                  <h3 class="title">Felvételi előkészítő</h3>
                  <p>
                    <b>4.-8. osztályos gyerekeknek</b>
                    <br />
                    <br />A középiskolai felvételi előkészítő foglalkozásaink alatt a
                    felvételi feladatsorok kérdéseinek megfelelő kompetenciákat is fejlesztjük.
                    Ilyen például a logikai problémafelismerő és megoldó képesség.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item"></div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

:root {
      --my_green: #64B350;
      --my_purple: #963CBA;
      --my_blue: #34A4DD;
  }

.page {
  display: none;
  width: 100vw;
  height: calc(100vh - 84.5px);
  position: absolute;
}

#landing_page {
  background-color: var(--my_blue);
}

.landing_board {
  width: 95vw;
  height: 600px;
  background-color: white;
  margin: auto;
  margin-top: 112px;

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
}

.title {
  text-align: center;
  font-family: "Audiowide", cursive;
  padding-top: 25px;
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

.basics {
  width: 250px;
  margin: auto;
  font-size: 14px;
  text-align: center;
  margin-top: 50px;
  color: white;
}

.basics a {
  color: white;
  text-decoration: underline;
}

#navbarSupportedContent {
  margin-left: 15vw;
}

.carousel_img_holder {
  max-width: 868px;
  width: 50vw;
  height: 500px;
  background-color: gray;
  margin: auto;
}

.carousel_img {
  background-size: cover;
  background-position: center;
  margin: 0;
  height: 500px;
  width: 100%;
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

.carousel_nav {
  height: 70px;
  width: 45px;
  margin-top: 200px;
  background-image: url("../assets/lila.png");
  background-size: cover;
  background-position: center;
  border: none;
  background-color: rgba(255, 255, 255, 0);
}

#back {
  float: left;
  margin-left: 10vw;
  transform: rotate(180deg);
}

#forward {
  float: right;
  margin-right: 10vw;
}

.slide2_content {
  height: 100%;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.7);
  float: right;
  padding: 20px;
}

.slide2_content p {
  line-height: 20px;
  padding-top: 2vw;
}

@media screen and (max-width: 800px) {
  .carousel_img_holder {
    max-width: 868px;
    width: 80vw;
    height: 400px;
    margin: auto;
  }

  .carousel_img {
    height: 400px;
  }

  .subscribe_btn {
    margin-top: 300px;
  }

  .carousel_nav {
    display: none;
  }

  .carousel-indicators {
    display: none;
  }

  .slide2_content {
    font-size: 12px;
  }
}

@media screen and (max-width: 500px) {
  .landing_board {
    margin-top: 20px;
    height: 500px;
  }

  .title {
    font-size: 24px;
  }

  .basics {
    width: 100vw;
    font-size: 10px;
    margin-top: 10px;
    text-align: center;
  }
  .subscribe_btn {
    margin-top: 50px;
  }
}
</style>
