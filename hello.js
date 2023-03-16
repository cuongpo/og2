function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
  };
  
  function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  
  function improve_click() {
	  const upgrade = document.getElementsByClassName("tooltip");
	  for (let i=1;i<100;i++) {
		  if (upgrade[i].innerHTML=="Improve") {
			  upgrade[i].click();
		  };
	  };
  }
  
  
  function auto() {
	  var check = 0;
	  const metal = document.getElementsByClassName("icon sprite sprite_medium medium metalMine");
	  console.log(metal);
	  const crystal = document.getElementsByClassName("icon sprite sprite_medium medium crystalMine");
	  const energy = document.getElementsByClassName("icon sprite sprite_medium medium solarPlant");
	  const energy_amount = document.getElementById("resources_energy");
	  const metal_amount = document.getElementById("resources_metal");
	  const crystal_amount = document.getElementById("resources_crystal");
	  const dete_amount = document.getElementById("resources_deuterium");
	  const metal_storage = document.getElementsByClassName("icon sprite sprite_small small metalStorage");
	  const crystal_storage = document.getElementsByClassName("icon sprite sprite_small small crystalStorage");
	  const dete_storage = document.getElementsByClassName("icon sprite sprite_small small deuteriumStorage");
  
	  // check storerage
	  if ((metal_amount.getAttribute("class")=="overmark")&&(check==0)) {
		  metal_storage[0].click();
		  setTimeout(improve_click,3000);
		  check = 1;
		  console.log("upgrade metal storage");
	  };
	  if ((crystal_amount.getAttribute("class")=="overmark")&&(check==0)) {
		  check = 1;
		  crystal_storage[0].click();
		  setTimeout(improve_click,3000);
		  console.log("upgrade crystal storage");
	  };
	  if ((dete_amount.getAttribute("class")=="overmark")&&(check==0)) {
		  check = 1;
		  dete_storage[0].click();
		  setTimeout(improve_click,3000);
		  console.log("upgrade dete storage");
	  };
  
	  // check energy
	  if ((energy_amount.innerHTML < 0)&(check==0)) {
		  check = 1;
		  energy[0].click();
		  setTimeout(improve_click,3000);
	  }
  
  
	  // Upgrade metal
	  if (check == 0) {
		  metal[0].click();
		  setTimeout(improve_click,3000);
		  console.log("upgrade metal");
	  };
  
	  if (check == 0) {
		  crystal[0].click();
		  setTimeout(improve_click,3000);
		  console.log("upgrade crystal");
	  };
  
  
  };
  
  function expe() {
	  var x = document.getElementById("sendExpFleet");
	  if (x!== null) {
		  x.click();
	  };
	  console.log("2");
  };
  
  
  function main(){
	  var planet = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies"
	  var planet_1 = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33621689";
	  var planet_2 = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33622404";
	  var planet_2_expe = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch&mission=15&position=16&type=1&galaxy=6&system=200&type=1";
	  var planet_3 = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33622556";
	  var planet_4 = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&cp=33623289";
	  var bug = "https://s183-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&modus=1&token=3e6303311a43630576ab31c19a5d99f3&type=4&menge=1";
  
	  
  
  
	  // ACTION
	  switch (window.location.href) {
		  case planet_1:
			  auto();
			  break;
		  case planet_2:
			  const rand2 = randomIntFromInterval(1,2);
			  console.log(rand2);
			  if (rand2 == 1) {
				  window.location.href=planet_2_expe;
			  } else {
				  auto();
			  };
			  break;
		  case planet_2_expe:
			  console.log("debug");
			  expe();
			  break;
		  case planet_3:
			  auto();
			  break;
		  case planet_4:
			  auto();
			  break;		
	  }
  
	  const rand = randomIntFromInterval(1,4);
	  console.log(window.location.href);
  
	  // GO 
	  setTimeout(function(){
		  switch (rand) {
			  case 1:
				  window.location.href=planet_1;
				  break;
			  case 2:
				  window.location.href=planet_2;
				  break;
			  case 3:	
				  window.location.href=planet_3;
				  break;	
			  case 4:	
				  window.location.href=planet_4;
				  break;			
		  }
	  },5000);
  };
  
  setInterval(main,30000);
  
  
  