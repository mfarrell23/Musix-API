driver();//runs the function on load

async function driver(){//on load function
        const id = localStorage.getItem('Hero id:');//pulls id from local storage and get the hero/vilin info
        const data = await searchHero(id);
        getCard(data);
    
}
async function searchHero(id){//uses the api to pull the info
    let response = await fetch('https://superheroapi.com/api.php/3309439356005776/'+id);
        if(response.ok){
            var jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        }
        else{
            alert("HTTP-Error: ",response.status);
        }   
}
function getCard(data){//gets the data and assigns certin parts to certin divs
    document.getElementById('image').firstElementChild.src = `${data.image.url}`;
    document.getElementById('name').innerHTML = `${data.name}`;
    document.getElementById('bio').innerHTML = displayparagraph(data.biography);
    document.getElementById('stats').innerHTML = displayparagraph(data.powerstats);
    document.getElementById('connections').innerHTML = displayparagraph(data.connections);
    document.getElementById('apperence').innerHTML = displayparagraph(data.appearance);
    document.getElementById('work').innerHTML = displayparagraph(data.work);
    const search=`${data.name}`; //pulls the name and saves it inot search
    main(search);//calls the nect function to get gifs
}
function displayparagraph (jsonData){//function that helps with data thats pulled to turn into paragraph
    var placeholder='';
    for (var key in jsonData){
        placeholder += 
            '<p><b>'+key.charAt(0).toUpperCase()+key.slice(1) +'</b> : '+ jsonData[key]+ '</p>';
    }
    return placeholder;
}

var back_btn = document.querySelector("#back");//back button to go tp first html
back_btn.addEventListener("click",function(){
    location.replace('../index.html', "_self");
    
})


var GIPHY_KEY = 'FuJCCJ2qRM1JesFbOw3n5R2AiEgGEUcY';//access key for gify


function giphySearch(superHero) {//pull gifs from the api
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${superHero}&api_key=${GIPHY_KEY}&limit=2`)//limit sets amount of gifs pulled
    .then(response => response.json());
}

async function main(superHero) {//this function allows the gifs to be save to the divs
    const result = await giphySearch(superHero);
    $('.heroGif').html('');
    result.data.forEach(gif => {//save multiple gifs to the same div
    let img = new Image();
    img.src = gif.images.original.url;
    $('.heroGif').append(img)
      });

};

// this function is for light and dark mode
// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");

//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
// sunIcon.addEventListener("click", () => {
//     localStorage.theme = 'light' })
  
// moonIcon.addEventListener("click", () => {
//     localStorage.theme = 'dark' })