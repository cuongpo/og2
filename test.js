var token = "71752bd0c631a1cbada24b3232bd10ce";
var url = "https://s181-us.ogame.gameforge.com/game/index.php?page=ingame&component=supplies&modus=1&type=4&menge=1&token="+token;
var xhr = new XMLHttpRequest();
xhr.open("GET", url);


xhr.onload = function() {
   if (xhr.readyState === 4) {
      var check = 0;
      console.log(xhr.status);
      var text = xhr.responseText;
      console.log(text);

      // find newToken
      var tim1 = text.slice(text.search("urlQueueAdd"),text.search("lastBuildingSlot"));
      var new_token = tim1.slice(tim1.search("token=")+6,tim1.search("';"));
      console.log(new_token);

      // get metal amount 
      var tim2 = text.slice(text.search('<span id="resources_metal" data-raw='),text.search('<div class="resource_tile crystal">'));
      var metal_amount = tim2.slice(tim2.search("data-raw")+10,tim2.search("class")-2);
      console.log(metal_amount);

      // get crystal amount

      // get deu amount

      // get energy
      var tim3 = text.slice(text.search('<span id="resources_energy" data-raw='),text.search('<div class="resource_tile population">'));
      var energy_amount = parseInt(tim3.slice(tim3.search("data-raw")+10,tim3.search("class")-2));
      console.log(energy_amount);

      // if energy < 0 upgrade energy
      if (energy_amount < 0) {
         
      }


   }
};

xhr.send();
