$('#searchForm').submit(async (event) => {//what to do when submit button is pressed
  event.preventDefault();

  var results = document.getElementById('results');//clears previous search if any
  results.remove();//clears previous search if any

  var input = $('#input-get1');//gets user input and saves it in input
  searchHero(input.val());//calls for search hero function
});

async function searchHero(searchString){//this functions calls for the api with the users input and returns the result
  
    var response = await fetch('https://superheroapi.com/api.php/3309439356005776/search/'+ searchString);
        renderData(await response.json());
}

function renderData(data){// gets all of the data and runs it to be able to take out all the cards
        var result_container = document.getElementById('result-container');
        var results = document.createElement('DIV');
        results.id = 'results';
        result_container.appendChild(results);
        data.results.forEach((element) => {//each card that has been brough wiht the api will be run through the next function
            results.appendChild(getCard(element));
        });
}

function getCard(data){//for each hero/villing a new div is created with their picture and name
  var cardContainer = document.createElement('DIV');
  cardContainer.className = 'card';
  console.log(data);
  cardContainer.id = data.id;//will get the info from diff and save into div
  cardContainer.innerHTML = `
      <div class="card-img-container">
          <img src="${data.image.url}">
      </div>
      <div id="details_btn" class="card-name">${data.name}</div>
  
  `
  return cardContainer;//returns one card 
}

function displayparagraph (jsonData){//this function is able to take and object and trun it into stirng
    var placeholder='';
    for (var key in jsonData){
        placeholder += 
            '<p><b>'+key.charAt(0).toUpperCase()+key.slice(1) +'</b> : '+ jsonData[key]+ '</p>';
    }
    return placeholder;
}

document.addEventListener('click', (event) => {//this listens for when the user hits a specific hero/villin name
  if(event.target.id == 'details_btn'){
      var id = event.target.parentNode.id;//pulls the card pressed id to later call it
      window.open('./assets/index2.html', "_self");//opens second html page
      console.log(id)
      localStorage.setItem('Hero id:', id);//saves id to local storage
  }});

