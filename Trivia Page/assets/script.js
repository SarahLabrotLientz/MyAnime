
// // //Get select object from dropdown menu

var selectElement = document.querySelector(".Selected");

selectElement.addEventListener('change', (event) => {

    var result = document.querySelector(".result");
    // result.textContent = event.target.value;
    var chosen = event.target.value;
    loadSelectedAnime(chosen);
    var allchosen = []; //array to hold all selected anime characters

  

    
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




