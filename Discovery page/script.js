const base_url = "https://api.jikan.moe/v3";

function searchAnime(event){

    event.preventDefault();
    //const form = new FormData(this);
    const query = searchBar.value;
    console.log(query);

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(function(response) {
      updateDom(response);
      if (
            searchBar.value == "" ||
             isDuplicateValue(searchResults, searchBar.value)
          ) {
             return;
           } else {
             searchResults.push(searchBar.value);
             makeListItem(searchBar.value, ul);
             localStorage.searchResults = JSON.stringify(searchResults);
             searchBar.value = "";
          }
    });
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');

    const animeByCategories = data.results
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});
        

        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `
                    <div class="card">
                        <div class="card-image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${anime.title}</span>
                            <p>${anime.synopsis}</p>
                        </div>
                        <div class="card-action">
                            <a href="${anime.url}">Learn More!</a>
                        </div>
                    </div>
                
                `
            }).join("");
            
            //add function to create list after search


            return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="jude-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}




//search bar js
const form = document.getElementById("form2");
const searchBar = document.getElementById("search");

const deleteButton = document.getElementById("delete");
const ul = document.getElementById("ul");


if (localStorage.searchResults && localStorage.searchResults != "") {
  searchResults = JSON.parse(localStorage.searchResults);
} else {
  searchResults = [];
}

const makeListItem = (text, parent) => {
  let listItem = document.createElement("li");
  listItem.textContent = text;
  listItem.className = "list-group-item";
  parent.appendChild(listItem);
};

searchResults.forEach(element => {
  makeListItem(element, ul);
});

const isDuplicateValue = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == text) {
      return true;
    }
  }

  return false;
};

form.addEventListener("submit",searchAnime);

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   searchAnime;
//   if (
//     searchBar.value == "" ||
//     isDuplicateValue(searchResults, searchBar.value)
//   ) {
//     return;
//   } else {
//     searchResults.push(searchBar.value);
//     makeListItem(searchBar.value, ul);
//     localStorage.searchResults = JSON.stringify(searchResults);
//     searchBar.value = "";
//   }
// });

deleteButton.addEventListener("click", () => {
  localStorage.clear();
  searchResults = [];
  searchBar.value = "";
  // I use querySelectorAll 
  let arr = document.querySelectorAll("li");
  // I use the static collection 
  for (let i = 0; i < arr.length; i++) {
    arr[i].remove();
  }
});