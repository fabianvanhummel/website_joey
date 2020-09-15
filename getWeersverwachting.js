function getWeersverwachting() {
  if (typeof coords !== "undefined") {
    var request = new XMLHttpRequest();

    request.open(
      "GET",
      "http://weerlive.nl/api/json-data-10min.php?key=4e87fae58d&locatie=" +
        coords.latitude +
        "," +
        coords.longitude,
      true
    );
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      if (
        data.liveweer[0].d1tmax >= 20
        ) {
        var img_warm = document.createElement("img"); 
 
        img_warm.src = "file://fspaka02/userdata7c$/al15266/Documents/VueJS/oefenapp//resources/warm.png"; 
        var src = document.getElementById("reactie"); 
         
        src.appendChild(img_warm); 

        grab_data("Summer");
        document.getElementById("het_weer_reactie").innerHTML = "Het wordt morgen erg lekker weer! Meer dan 20 graden. <br> Joey hoeft geen vest aan.";
      } else if (
        data.liveweer[0].d1tmax < 20 &&
        data.liveweer[0].d1tmax >= 10
      ) {
        var img_mweh = document.createElement("img"); 
 
        img_mweh.src = "file://fspaka02/userdata7c$/al15266/Documents/VueJS/oefenapp//resources/matig.png"; 
        var src = document.getElementById("reactie"); 
         
        src.appendChild(img_mweh); 

        grab_data("fall-weather");
        document.getElementById("het_weer_reactie").innerHTML = "Het wordt morgen niet erg warm, tussen de 10 en 20 graden. <br> Joey hoeft geen vest aan.";
      } else {
        var img_koud = document.createElement("img"); 
 
        img_koud.src = "file://fspaka02/userdata7c$/al15266/Documents/VueJS/oefenapp//resources/koud.png"; 
        var src = document.getElementById("reactie"); 
         
        src.appendChild(img_koud); 

        grab_data("bad-weather");
        document.getElementById("het_weer_reactie").innerHTML = "Het wordt morgen koud, minder dan 10 graden. <br> Joey moet een vest aan!";
      }
    };

    request.send();
  }
}
