
// // //Get select object from dropdown menu

var selectElement = document.querySelector(".Selected");

selectElement.addEventListener('change', (event) => {

    var result = document.querySelector(".result");
    // result.textContent = event.target.value;
    var chosen = event.target.value;
    loadSelectedAnime(chosen);
    var allchosen = []; //array to hold all selected anime characters

    // allchosen = JSON.parse(localStorage.getItem("allchosen")) || []; //get previously chosen
    // allchosen.push(chosen); //pushes new choices selected in array
    // localStorage.setItem("allchosen", JSON.stringify(allchosen)); //saves chosen anime to local storage

    
});


//empties out previous data so that it only shows selected content

$(".result").empty();



  //to open API for images and facts

function loadSelectedAnime(name) {

    //empties out previous data so that it only shows selected content

$(".result").empty();

    var animeURL = "https://anime-facts-rest-api.herokuapp.com/api/v1/" + name;
    fetch(animeURL)
        .then(response => response.json())
        .then(info => {
            console.log(info)
            var newimage = document.createElement("img");
            newimage.setAttribute("src", info.img);

//creating attribute "class" to style the above
            // newimage.setAttribute("class")
            document.querySelector(".result").appendChild(newimage);

            for (var i=0; i<info.data.length; i++){
                var newCard = document.createElement("h2");
                newCard.textContent = info.data[i].fact;
                document.querySelector(".result").appendChild(newCard);
                console.log(info.data[i].fact);
            }

            
        })
}






// DAY 1 JAVASCRIPT TO SEE IF API WORKED
// fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/")
//     .then(response => response.json())
//     .then(info => { 
//         console.log(info)
//         for (i=0; i<info.data.length; i++){
//             var newCard = document.createElement("card");
//             newCard.textContent = info.data[i].anime_name;
//             document.querySelector("body").appendChild(newCard);
//         }
//     })

// function createList(anime) {
//     var newTitle = document.createElement("li");
//     newTitle.textContent = anime_name;

//     console.log(anime);

//     var newImg = document.createElement("img");
//     newImg.setAttribute("src", anime_img);
//     selectElement.appendChild(newTitle);
//     selectElement.appendChild(newImg);
// }

//     fetch('https://animechan.vercel.app/api/random')
//     .then(response => response.json())
//     .then(quote => console.log(quote))


// // var obj = {
// //     dogN: "Fido",
// //     test: {
// //         name: "Lewis",
// //         moreTest: {
// //             superName: "Batman";
// //         }
// //     }
// // }

// // console.log(obj.test.moreTest.superName)