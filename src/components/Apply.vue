<template>
  <div class="page green_page">
    <div class="board">
      <h1 class="title">Jelentkezés</h1>

      <div class="container" v-bind:class="{ hide: !sended}">
        <h1 style="text-align: center; margin-top: 50px;">Jelentkezés sikeresen elküldve!</h1>
        <router-link to="/" tag="button" class="apply_btn">Vissza</router-link>
      </div>
      <div class="container" v-bind:class="{ hide: sended}">
        <div class="row">
          <div class="col-lg-12"></div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Név</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                name="name"
                id="name"
                aria-describedby="name"
              />
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                v-model="email"
              />
            </div>

            <form>
              <div class="form-group">
                <label for="typeSelector">Mire szeretne jelentkezni?</label>
                <select
                  class="form-control"
                  id="typeSelector"
                  @change="handleChange"
                  v-model="type"
                >
                  <option value="tabor" data-foo="tabor">Tábor</option>
                  <option balue="elokeszito" data-foo="elokeszito">Felvételi előkészítő</option>
                </select>
              </div>

              <div class="form-group" v-bind:class="{ hide: prepareHide}">
                <label for="prepareTypeSelector">Előkészítők</label>
                <select class="form-control" id="prepareTypeSelector" v-model="narrow_type">
                  <option value="math_prep" data-foo="math_prep">matek</option>
                  <option balue="hun_prep" data-foo="hun_prep">magyar</option>
                </select>
              </div>

              <div class="form-group" v-bind:class="{ hide: campHide}">
                <label for="campTypeSelector">Táborok</label>
                <select class="form-control" id="campTypeSelector" v-model="narrow_type">
                  <option value="photography_camp" data-foo="photography_camp">fotós tábor</option>
                  <option balue="video_camp" data-foo="video_camp">videóvágó tábor</option>
                </select>
              </div>
            </form>
          </div>
          <div class="col-sm-6">
            
<form>
              <div class="form-group">
                <label for="typeSelector">Hányadik osztályos a gyermeke?</label>
                <select class="form-control" id="classSelector" v-model="kids_class">
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </form>
            <label for>Megjegyzések</label>
            <textarea class="form-control" v-model="comment"></textarea>
            <br/><br/><br/>
            Az
            <b>"Elküldöm"</b> gombra kattintva ön elfogadja az
            <a href="#">Adatkezelési Nyilatkozatot</a>!
            <button
              class="btn btn-success right_float"
              id="send_btn"
              type="submit"
              value="Submint"
              v-on:click="send"
            >Elküldöm</button>
          
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
export default {
  data() {
    return {
      name: "",
      email: "",
      kids_class: "",
      type: "",
      narrow_type: "",
      comment: "",
      sended: false,
      prepareHide: true,
      campHide: false
    };
  },
  methods: {
    handleChange(e) {
      if (e.target.options.selectedIndex > -1) {
        let selectedType =
          e.target.options[e.target.options.selectedIndex].dataset.foo;

        if (selectedType === "elokeszito") {
          this.campHide = true;
          this.prepareHide = false;
        }

        if (selectedType === "tabor") {
          this.campHide = false;
          this.prepareHide = true;
        }
      }
    },
    send() {
      this.sended = true;
      console.log("Message sended!");

      console.log(
        "name: " +
          this.name +
          "\n" +
          "email: " +
          this.email +
          "\n" +
          "class: " +
          this.kids_class +
          "\n" +
          "type: " +
          this.narrow_type +
          "\n" +
          "comment: " +
          this.comment
      );
    }
  }
};
</script>

<style scoped>
.row div {
  /* border: 1px solid black; */
}

.right_float {
  float: right;
}

.hide {
  display: none;
}

#send_btn {
  margin-bottom: 50px;
  margin-top: 30px;
}

label {
  color: rgb(59, 59, 59);
  font-size: 14px;
  margin-bottom: -12px;
  margin-top: 10px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: white !important;
  border-radius: 5px;
}

select::-ms-expand {
  display: none;
}

select + i.fa {
  float: right;
  margin-top: -26px;
  margin-right: 10px;
  /* this is so when you click on the chevron, your click actually goes on the dropdown menu */
  pointer-events: none;
  /* everything after this is just to cover up the original arrow */
  /* (for browsers that don't support the syntax used above) */
  background-color: transparent;
  color: black !important;
  padding-right: 5px;
}

select option {
  padding-right: 21px;
}
</style>
