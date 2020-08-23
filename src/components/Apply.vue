<template>
  <div class="page green_page">
    <div class="board">
      <h1 class="title">Jelentkezés</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-12"></div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Név</label>
              <input type="text" class="form-control" name="name" id="name" aria-describedby="name" />
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <form>
              <div class="form-group">
                <label for="typeSelector">Mire szeretne jelentkezni?</label>
                <select class="form-control" id="typeSelector" @change="handleChange">
                  <option value="tabor" data-foo = "tabor">Tábor</option>
                  <option balue="elokeszito" data-foo = "elokeszito">Felvételi előkészítő</option>
                </select>
              </div>

              <div class="form-group">
                <label for="elokeszitoTypeSelector">Előkészítők</label>
                <select class="form-control" id="typeSelector" @change="handleChange">
                  <option value="math" data-foo = "math">matek</option>
                  <option balue="hun_lang" data-foo = "hun_lang">magyar</option>
                </select>
              </div>



              <div class="form-group">
                <label for="typeSelector">Hányadik osztályos a gyermeke?</label>
                <select class="form-control" id="classSelector">
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </form>
          </div>
          <div class="col-sm-6">
            <label for>Megjegyzések</label>
            <textarea class="form-control"></textarea>
          </div>
          <div class="col-sm-6">One of three columns</div>

          <div class="col-lg-12">
            <button class="btn btn-success right_float" type="submit" value="Submint">Elküldöm</button>
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

methods: {
    handleChange(e) {
        if(e.target.options.selectedIndex > -1) {

            let selectedType = e.target.options[e.target.options.selectedIndex].dataset.foo;
            
            console.log(selectedType);

            if(selectedType === "tabor"){
              console.log("Yeee, Táborba megyünk!");
            }
        }
    }
}
};

</script>

<style scoped>
.row div {
  /* border: 1px solid black; */
}

.right_float{
  float: right;
}

.hide{
  display: none;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: white !important;
  border-radius: 10px;
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
