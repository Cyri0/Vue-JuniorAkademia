<template>
  <div class="page blue_page">
    <div class="board">
      <h1 class="title">Nyelvek</h1>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 title lang english">
            <h2>ANGOL</h2>
            <div></div>
          </div>
          <div class="col-lg-6 title lang deutsch">
            <h2>NÉMET</h2>
            <div></div>
          </div>
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
.lang {
  min-height: 300px;
}

.lang h2 {
  text-align: center;
  font-size: 24px;
}

.lang div{
  width: 90%;
  margin-left: 5%;
  min-height: 200px;
  border: 1px solid blue;
}
</style>
