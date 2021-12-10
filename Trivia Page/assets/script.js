// Script edits Thur Dec 9

$(document).ready(function() {
    console.log("ready!");




// //Get select object

// //Get select object
// var AnimeSelected = document.getElementById("Selected");

// //Set selected
// showAnime(AnimeSelected, "13");

// function showAnime(selected, valueToSet) {
//     for (var i = 0; i < AnimeSelected.options.length; i++) {
//         if (AnimeSelected.options[i].text== valueToSet) {
//             AnimeSelected.options[i].selected = true;
//             return;
//         }
//     }
// }




// onclick when user selects anime character
$("#Selected").on("click", function(event) {
    event.preventDefault();
    EventTarget.addEventListener()
    var AnimeSelected = $("#Selected").val() //save the anime character selected
    var allAnime= []; //Array to hold all selected anime characters

    allAnime= JSON.parse(localStorage.getItem("allAnime")) || []; //Get Anime Characters
    allAnime.push(AnimeSelected); //pushes new anime selected to array
    localStorage.setItem("allAnime", JSON.stringify(allAnime)); //save anime selected to local storage


    showAnime(AnimeSelected);
}); //End of anime selection onclick storage










// DAY 1 JAVASCRIPT TO SEE IF API WORKED
fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/")
    .then(response => response.json())
    .then(info => { 
        console.log(info)
        for (i=0; i<info.data.length; i++){
            var newH = document.createElement("h2");
            newH.textContent = info.data[i].anime_name;
            document.querySelector("body").appendChild(newH)
        }
    })



    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))


// var obj = {
//     dogN: "Fido",
//     test: {
//         name: "Lewis",
//         moreTest: {
//             superName: "Batman"
//         }
//     }
// }

// console.log(obj.test.moreTest.superName)