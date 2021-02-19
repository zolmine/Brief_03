function get_veh() {
  var veh = document.getElementById("car").value;
  var arr, arr_01, prx, prx_01;
  switch (veh) {
    case "Moto":
      arr = ["Essence", "Electrique"];
      arr_01 = ["NaN"];
      prx = [0.14, 0.05];
      prx_01 = [0];
      car_price = [10];
      break;
    case "Citadine":
      arr = ["Essence", "Electrique", "Diesel", "Hybride"];
      arr_01 = ["Manuelle"];
      prx = [0.14, 0.05, 0.21, 0.09];
      prx_01 = [0];
      car_price = [12];
      break;
    case "Compact":
      arr = ["Essence", "Diesel", "Hybride"];
      arr_01 = ["Manuelle"];
      prx = [0.14, 0.21, 0.09];
      prx_01 = [0];
      car_price = [14];
      break;
    case "Berline":
      arr = ["Essence", "Diesel", "Hybride"];
      arr_01 = ["Automatique"];
      prx = [0.14, 0.21, 0.09];
      prx_01 = [0.19];
      car_price = [20];
      break;
    case "Utilitaire":
      arr = ["Diesel"];
      arr_01 = ["Manuelle"];
      prx = [0.21];
      prx_01 = [0];
      car_price = [16];
      break;
    case "Engin de Chantier":
      arr = ["Essence", "Diesel"];
      arr_01 = ["Manuelle"];
      prx = [0.14, 0.21];
      prx_01 = [0];
      car_price = [900];
      break;
    case "Camion":
      arr = ["Diesel"];
      arr_01 = ["Automatique"];
      prx = [0.21];
      prx_01 = [0.19];
      car_price = [250];
      break;
  }
  var string = "";
  var string_01 = "";

  //var final_prx="";

  for (i = 0; i < arr.length; i++) {
    string = string + "<option value=" + prx[i] + ">" + arr[i] + "</option>";
  }
  for (i = 0; i < arr_01.length; i++) {
    string_01 = string_01 + "<option value=" + prx_01[i] + ">" + arr_01[i] + "</option>";
  }

  //final_prx=final_prx+"<option value="+prx+"></option>";
  document.getElementById("carb").innerHTML = string;

  document.getElementById("boit").innerHTML = string_01;

  document.getElementById("car_price").value = car_price;
  //document.getElementById("carb").innerHTML=final_prx;
  //document.getElementById("boit").innerHTML=string_01;

}

function days() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var choosen_day = new Date(start);
  var days = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);

  if (days < 0) {
    alert("please chooose the right date ");
    end = 0;
    
    days = 0;
    //document.getElementById("start").value = 0;
    document.getElementById("end").value = 0;
  }
  document.getElementById("nbr").value = days;
}





function calc() {
  const modalDisp = document.querySelector('#modal')
  modalDisp.style.display = 'flex'
  document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none'
  })

  var days_nbr = document.getElementById("nbr").value;
  var veh_prx = document.getElementById("car_price").value;
  let carburant = document.getElementById("carb").value;
  let boit = document.getElementById("boit").value;
  var carburant_per_day = 0;
  var boit_per_day = 0;
  var total = 0;

  


  carburant_per_day = parseFloat(carburant) * parseFloat(veh_prx);
  boit_per_day = (parseFloat(boit) * parseFloat(veh_prx));
  total = (carburant_per_day + boit_per_day + parseFloat(veh_prx)) * days_nbr;
  var total1 = total + "$"
  document.getElementById("inp").value = total1;
  document.getElementById("price").innerHTML = total1;
  


}