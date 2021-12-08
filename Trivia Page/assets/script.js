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