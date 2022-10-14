var GIPHY_KEY = 'FuJCCJ2qRM1JesFbOw3n5R2AiEgGEUcY';
 var searchBtn= document.querySelector("#find");

(function () {
    function giphySearch(superHero) {
      return fetch(`http://api.giphy.com/v1/gifs/search?q=${superHero}&api_key=${GIPHY_KEY}&limit=1`)
        .then(response => response.json());
    }

    (function listenOnFormSubmit() {
        $('#searchForm').submit(async (event) => {
          event.preventDefault();
          let input = $('#input-get1');
          main(input.val());
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
  searchBtn.addEventListener("click", getApi)