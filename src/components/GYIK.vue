<template>
  <div class="page purple_page">
    <div class="board">
      <h1 class="title">Gyakran Ismételt Kérdések</h1>
      <h2 class="fade-in">Hamarosan...</h2>

      <router-link to="/matric" tag="button" class="back_btn">Vissza az előkészítőkhöz!</router-link>
    </div>
    <div class="mandatory">
      ©2020 Junior Akadémia <br>
      <router-link to="/DataManagementStatement/aszf">ÁSZF</router-link>
      <router-link to="/DataManagementStatement/adatkezelesinyilatkozat">Adatkezelési Nyilatkozat</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  margin-top: 150px;
  text-align: center;
}



.back_btn {
  color: white;
  border: 3px solid #64b350be;
  background-color: #64b350be;
}

.back_btn:hover {
  border: 3px solid var(--my_green);
  background-color: var(--my_green);
}

</style>
