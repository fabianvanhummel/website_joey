datum = new Date().toLocaleTimeString();

if (datum > "00:00:00" && datum < "06:00:00") {
  tijd_van_de_dag.innerHTML +=  '<h1>Goedenacht</h1>';
} else if (datum > "06:00:00" && datum < "12:00:00") {
  tijd_van_de_dag.innerHTML +=  '<h1>Goedemorgen</h1>';
} else if (datum > "12:00:00" && datum < "18:00:00") {
  tijd_van_de_dag.innerHTML +=  '<h1>Goedemiddag</h1>';
} else {
  tijd_van_de_dag.innerHTML += '<h1>Goedenavond</h1>';
}
