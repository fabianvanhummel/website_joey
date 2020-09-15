function getQuoteOfTheDay() {

  var request = new XMLHttpRequest()

  request.open('GET', 'https://quotes.rest/qod?language=en', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    var Quote = data.contents.quotes[0].quote
    var Author = data.contents.quotes[0].author
    document.getElementById("quote").innerHTML = `${Quote} <br> -  <b>${Author}</b>`;
  }
  
  request.send()

}
getQuoteOfTheDay();
