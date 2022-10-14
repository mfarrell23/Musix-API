
var GIPHY_KEY = 'FuJCCJ2qRM1JesFbOw3n5R2AiEgGEUcY';

(function () {
    function giphySearch(superHero) {
      return fetch(`http://api.giphy.com/v1/gifs/search?q=${superHero}&api_key=${GIPHY_KEY}&limit=2`)
        .then(response => response.json());
    }

    (function listenOnFormSubmit() {
        $('#searchForm').submit(async (event) => {
          event.preventDefault();
          let input = $('#input-get1');
          main(input.val());
          searchHero(input.val());
        });
      })();

    async function main(superHero) {
      const result = await giphySearch(superHero);
      $('.saved-hero').html('');

      result.data.forEach(gif => {
         let img = new Image();
         img.src = gif.images.original.url;
         $('.saved-hero').append(img)
      });

    }
  })();

async function searchHero(searchString){
    let response = await fetch('https://superheroapi.com/api.php/3309439356005776/search/'+ searchString);
        renderData(await response.json());
}
function renderData(data){
        var result_container = document.getElementById('result-container');
        var results = document.createElement('DIV');
        results.id = 'results';
        result_container.appendChild(results);
        data.results.forEach((element) => {
            results.appendChild(getCard(element));
        });
}
function getCard(data){
  var cardContainer = document.createElement('DIV');
  cardContainer.className = 'card';
  cardContainer.id = data.id;
  var bio=displayparagraph(data.biography)
  var appearance= displayparagraph(data.appearance)
  var work= displayparagraph(data.work)
  var connections= displayparagraph(data.connections)
  cardContainer.innerHTML = `
      <div class="card-img-container">
          <img src="${data.image.url}">
      </div>
      <div id="details_btn" class="card-name">${data.name}</div>
      <div id="details_btn" class="card->intelligence"><p>Intelligence:${data.powerstats.intelligence}</p></div>
       <div id="details_btn" class="card-name"><p>Strength:${data.powerstats.strength}</p></div>
       <div id="details_btn" class="card-name"><p>Speed:${data.powerstats.speed}</p></div>
       <div id="details_btn" class="card-name"><p>Strength:${data.powerstats.strength}</p></div>
       <div id="details_btn" class="card-name"><p>Power:${data.powerstats.power}</p></div>
       <div id="details_btn" class="card-name"><p>Combat:${data.powerstats.combat}</p></div>
       <div id="details_btn" class="card-biography">${bio}</div>
       <div id="details_btn" class="card-appearance">${appearance}</div>
       <div id="details_btn" class="card-work">${work}</div>
       <div id="details_btn" class="card-connections">${connections}</div>
       
  `

  return cardContainer;
}

function displayparagraph (jsonData){
    var placeholder='';
    for (var key in jsonData){
        placeholder += 
            '<p><b>'+key.charAt(0).toUpperCase()+key.slice(1) +'</b> : '+ jsonData[key]+ '</p>';
    }
    return placeholder;
}


