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
              <label for="name">*Szülő neve</label>
              <input
                required
                type="text"
                v-model="name"
                class="form-control"
                name="name"
                id="name"
                aria-describedby="name"
              />

              <label for="email">*Email</label>
              <input
                required
                type="email"
                class="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                v-model="email"
              />

              <label for="phone">*Telefonszám</label>
              <input
                required
                type="tel"
                class="form-control"
                name="phone"
                id="phone"
                aria-describedby="emailHelpId"
                v-model="phone"
              />
            </div>

            <form>
              <div class="form-group">
                <label for="typeSelector">*Mire szeretne jelentkezni?</label>
                <select
                  required
                  class="form-control"
                  id="typeSelector"
                  @change="handleChange"
                  v-model="type"
                >
                  <option value="language" data-foo="language">Nyelvek</option>
                  <option value="elokeszito" data-foo="elokeszito">Felvételi előkészítő</option>
                  <option value="robotika" data-foo="robotika">Mérnöki Alapozó</option>
                </select>
              </div>

              <div class="form-group" v-bind:class="{ hide: prepareHide}">
                <label for="prepareTypeSelector">*Előkészítők</label>
                <select class="form-control" id="prepareTypeSelector" v-model="narrow_type">
                  <option value="matek elokeszito" data-foo="math_prep">matek előkészítő</option>
                  <option value="magyar elokeszito" data-foo="hun_prep">magyar előkészítő</option>
                </select>
              </div>

              <div class="form-group" v-bind:class="{ hide: campHide}">
                <label for="campTypeSelector">*Nyelvek</label>
                <select class="form-control" id="campTypeSelector" v-model="narrow_type">
                  <option value="angol kezdo" data-foo="angol kezdo">angol kezdő</option>

                  <option value="angol halado" data-foo="angol halado">angol haladó</option>

                  <option value="nemet kezdo" data-foo="nemet kezdo">német kezdő</option>

                  <option value="nemet halado" data-foo="nemet halado">német haladó</option>

                  <option
                    value="nyelvvizsga felkeszito"
                    data-foo="nyelvvizsga felkeszito"
                  >nyelvvizsga felkészítő</option>
                </select>
              </div>
            </form>
          </div>
          <div class="col-sm-6">
            <form>
              <div class="form-group">

              <label for="kidname">*Gyermek neve</label>
              <input
                required
                type="text"
                v-model="kidname"
                class="form-control"
                name="kidname"
                id="kidname"
                aria-describedby="kidname"
              />



                <label for="typeSelector">*Hányadik osztályos a gyermeke?</label>
                <select class="form-control" id="classSelector" v-model="kids_class" required>
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
            <br />
            <br />
            <br />Az
            <b>"Elküldöm"</b> gombra kattintva ön elfogadja az
            <router-link to="/DataManagementStatement/">Adatkezelési Nyilatkozatot</router-link>!
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
      <router-link to="/DataManagementStatement/">ÁSZF és Adatkezelési Nyilatkozat</router-link>
    </div>
  </div>
</template>

<script>
import my_data from "../my_data.json";
import $ from "jquery";

export default {
  data() {
    return {
      name: "",
      email: "",
      kids_class: "",
      type: "",
      narrow_type: "",
      comment: "",
      phone: "",
      kidname:"",
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

        if (selectedType === "robotika") {
          this.campHide = true;
          this.prepareHide = true;
          this.narrow_type = "mernoki elokeszito";
        }

        if (selectedType === "elokeszito") {
          this.campHide = true;
          this.prepareHide = false;
        }

        if (selectedType === "language") {
          this.campHide = false;
          this.prepareHide = true;
        }
      }
    },
    send() {
      var data = {
        service_id: my_data[0].SERVICE_ID,
        template_id: my_data[0].TEMPLATE_ID_APPLY,
        user_id: my_data[0].USER_ID,
        template_params: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          kids_class: this.kids_class,
          narrow_type: this.narrow_type,
          comment: this.comment,
          kidname: this.kidname
        }
      };

      console.log(data);

      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
      })
        .done(function() {
          alert("Az üzenetet elküldtük!");
          location.reload();
          this.sended = true;
        })
        .fail(function(error) {
          alert("Probléma adódott... " + JSON.stringify(error));
        });
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
