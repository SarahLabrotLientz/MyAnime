var seasonListEl = document.querySelector("#seasonalList");
var searchAnime = document.querySelector("#searchForm");
var cardClass = document.getElementsByClassName("card");

function checkSearchForm(event) {
    event.preventDefault();
    var seasonInput = document.querySelector("#seasons").value;
    var yearInput = document.querySelector("#years").value;
    console.log(seasonInput);
    console.log(yearInput);
    loadSeasonAnime(yearInput,seasonInput);
}

function loadSeasonAnime(year,season) {
    const seasonURL = "https://api.jikan.moe/v3/season/"+ year +"/" + season;
    fetch(seasonURL)
    .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
    .then(function(animeList) {
        console.log(animeList);
        //seasonListEl.parentNode.removeChild(seasonListEl);
        for(var x = 0; x < 10; x++) {
            createList2(animeList.anime[x]);
        }
        

    })
    .catch(err=>console.warn(err.message))
}
   
searchAnime.addEventListener('submit',checkSearchForm);


function createList2(anime) {
    var animeList = document.createElement('li');

    var newCard = document.createElement("div");
    newCard.setAttribute("class", "card is-one-third");

    var newImg = document.createElement("img");
    newImg.setAttribute("src", anime.image_url);
    
    var newTitle = document.createElement("div");
    newTitle.setAttribute("class", "card-content");
    newTitle.textContent = anime.title;

    seasonListEl.appendChild(animeList);
    animeList.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newTitle);
}