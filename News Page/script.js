var seasonListEl = document.querySelector("#seasonalList");

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

        for(var x = 0; x < 7; x++) {
            createList(animeList.anime[x]);
        }
        

    })
    .catch(err=>console.warn(err.message))
   
}

function createList(anime) {
    var newTitle = document.createElement("li");
    newTitle.textContent = anime.title;

    console.log(anime);
    var newImg = document.createElement("img");
    newImg.setAttribute("src", anime.image_url);
    seasonListEl.appendChild(newTitle);
    seasonListEl.appendChild(newImg);
}


loadSeasonAnime(2022,"winter");