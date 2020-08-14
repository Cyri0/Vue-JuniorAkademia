<template>
  <div class="page green_page">
    <div class="board">
      <h1 class="title">Rólunk</h1>

      <div class="container centered">
        <div class="row">
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

          <div class="col-md-6 col-lg-8 highlighted">
            <h3 class="title">John Doe</h3>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
