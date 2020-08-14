<template>
  <div id="landing_page" class="page fade_in_anim">
    <div class="landing_board">
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
          <div class="carousel-item active" id="pics1">
            
            <h2 class="title">Alma</h2>
          </div>
          <div class="carousel-item" id="pics2">

          </div>
          <div class="carousel-item" id="pics3">
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
      ©2020 Junior Akadémia <br>
      <router-link to="/">ÁSZF</router-link>
      <router-link to="/">Adatkezelési Nyilatkozat</router-link>
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

.carousel{
  width: 80vw;
  min-width: 500px;
  max-width: 1000px;
  margin: auto;
}

.carousel-item{
  background-color: gray;
  height: 500px;
  background-size: cover;
  background-position: center;
}

#pics1{
  background-image: url("../assets/carousel/pics1.jpg");
}
#pics2{
    background-image: url("../assets/carousel/pics2.jpg");
}
#pics2{
  
}

@media screen and (max-width:650px) {
  .landing_board {
    margin-top: 20px;
    height: 500px;
  }

  .title {
    font-size: 24px;
  }

  .subscribe_btn {
    margin-top: 50px;
  }

  .carousel{
    min-width: 90vw; 
  }

  .carousel-item{
    height: 400px;
  }


}
</style>
