<template>
  <div class="page purple_page">
    <div class="board">
      <h1 class="title">Felvételi előkészítők</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <img src="../assets/pics/4elokesztio.jpg" />
            <h2 class="title">4. osztályosoknak felvételi előkészítő</h2>
            <p>Szeptember 14-től 15 alkalmas, 2 órás komplex 8 osztályos gimnáziumi előkészítőt indítunk, 4. osztályosok részére. Minden alkalommal foglalkozunk matematikával és magyar nyelvvel is.</p>
            <p>Max. 6-12 fős kis csoportokban.</p>
            <p>A pontos időpontok később kerülnek kihirdetésre.</p>
            <p class="price">Ár: 60.000 Ft</p>
            <p class="small">(15.000,- Ft/hó, 4 egyenlő részletben)</p>
            <button class="reg_btn">Előjelentkezés</button>
            <button class="gyik_btn">Gyakori kérdések</button>
          </div>

          <div class="col-lg">
            <img src="../assets/pics/4elokesztio.jpg" />
            <h2 class="title">4. osztályosoknak felvételi előkészítő</h2>
            <p>Szeptember 14-től 15 alkalmas, 2 órás komplex 8 osztályos gimnáziumi előkészítőt indítunk, 4. osztályosok részére. Minden alkalommal foglalkozunk matematikával és magyar nyelvvel is.</p>
            <p>Max. 6-12 fős kis csoportokban.</p>
            <p>A pontos időpontok később kerülnek kihirdetésre.</p>
            <p class="price">Ár: 60.000 Ft</p>
            <p class="small">(15.000,- Ft/hó, 4 egyenlő részletben)</p>
            <button class="reg_btn">Előjelentkezés</button>
            <button class="gyik_btn">Gyakori kérdések</button>
          </div>

          <div class="col-lg">
            <img src="../assets/pics/4elokesztio.jpg" />
            <h2 class="title">4. osztályosoknak felvételi előkészítő</h2>
            <p>Szeptember 14-től 15 alkalmas, 2 órás komplex 8 osztályos gimnáziumi előkészítőt indítunk, 4. osztályosok részére. Minden alkalommal foglalkozunk matematikával és magyar nyelvvel is.</p>
            <p>Max. 6-12 fős kis csoportokban.</p>
            <p>A pontos időpontok később kerülnek kihirdetésre.</p>
            <p class="price">Ár: 60.000 Ft</p>
            <p class="small">(15.000,- Ft/hó, 4 egyenlő részletben)</p>
            <button class="reg_btn">Előjelentkezés</button>
            <button class="gyik_btn">Gyakori kérdések</button>
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
.row div {
  padding: 0px;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 50px;
  border-radius: 10px;
  background-color: white;
  color: black;
  margin-bottom: 50px;

}


.board{
  background-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.0);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.0);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.0);
}

h1{
  color: white;
}

.row div img {
  width: 100%;
  border-radius: 10px 10px 0px 0px; 
}

.row div h2 {
  font-size: 24px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
}

.row div button {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 30px;

  width: 60%;
  font-family: "Audiowide", cursive;
}

.gyik_btn {
  border: none;
  color: gray;
  border: 3px solid gray;
}

.gyik_btn:hover {
  color: #555;
  border: 3px solid #555;
}

.reg_btn {
  color: white;
  border: 3px solid #64b350be;
  background-color: #64b350be;
}

.reg_btn:hover {
  border: 3px solid var(--my_green);
  background-color: var(--my_green);
}

.row div p {
  padding: 0px 20px 0px 20px;
  text-align: justify;
}

.price {
  font-weight: bold;
}

.small {
  font-size: 14px;
}

.container {
  padding-bottom: 100px;
  padding-top: 50px;
}
</style>
