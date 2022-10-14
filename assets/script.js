
function searchHeros(){
  var info =fetch('https://superheroapi.com/api.php/3309439356005776/search/Superman')
  
  .then((response) => response.json())
  .catch((error) => {
  console.log('not found', error);
  })
  console.log(info)
};
searchHeros();








// var GIPHY_KEY = 'FuJCCJ2qRM1JesFbOw3n5R2AiEgGEUcY';

// (function () {
//     function giphySearch(superHero) {
//       return fetch(`http://api.giphy.com/v1/gifs/search?q=${superHero}&api_key=${GIPHY_KEY}&limit=1`)
//         .then(response => response.json());
//     }

//     (function listenOnFormSubmit() {
//         $('#searchForm').submit(async (event) => {
//           event.preventDefault();
//           let input = $('#input-get1');
//           main(input.val());
//         });
//       })();

//     async function main(superHero) {
//       const result = await giphySearch(superHero);
//       $('.saved-hero').html('');

//       result.data.forEach(gif => {
//          let img = new Image();
//          img.src = gif.images.original.url;
//          $('.saved-hero').append(img)
//       });

//     }
//   })();