var seasonListEl = document.querySelector("#seasonalList");
var searchAnime = document.querySelector("#searchForm");
var cardClass = document.getElementsByClassName("card");


//Function to check which year and season is chosen.
function checkSearchForm(event) {
    event.preventDefault();
    var seasonInput = document.querySelector("#seasons").value;
    var yearInput = document.querySelector("#years").value;
    console.log(seasonInput);
    console.log(yearInput);
    $("#seasonalList").empty();
    loadSeasonAnime(yearInput,seasonInput);
}


//Function to fetch the anime list from the Jikan API and get it to create the list.
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
        for(var x = 0; x < 21; x++) {
            createList2(animeList.anime[x]);
        }
        

    })
    .catch(err=>console.warn(err.message))
}

//Function to create card for each fetched anime from API.
function createList2(anime) {

    var newCard = document.createElement("div");
    newCard.setAttribute("class", "card column is-one-quarter");

    var newImg = document.createElement("img");
    newImg.setAttribute("src", anime.image_url);
    
    var newTitle = document.createElement("div");
    newTitle.setAttribute("class", "card-content");
    newTitle.textContent = anime.title;

    seasonListEl.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newTitle);
}

//Event listener for search button
searchAnime.addEventListener('submit',checkSearchForm);