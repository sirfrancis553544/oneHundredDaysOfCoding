var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=44dae17430cc463b805132bda780fc02';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })