const button = document.getElementById('searchButton');
button.addEventListener('click', () => {
  let input = $('#search-data');
  searchHero(input.val());
})
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


