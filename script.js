const API_KEY = "live_KkQ98su9YPOSIDAApSZHpKeJkxnwFGMBuyDb3qImFZdrkyUfLMQyLz0P9ZKXpfCs";
let root = document.getElementById("root");




//    fetch('https://api.thedogapi.com/v1/breeds' ,{
//     method:'GET',
//     headers:{
//         'x-api-key':API_KEY,
//         'Content-Type':"application/json"
//     }
// })
// .then((r)=>r.json())
// .then((r)=>root.innerHTML=r.map((e)=>`<div class="card">
// <img src="${e.image.url}"/>
// <h3>${e.name}</h3>
// <p>${e.description}</p>
// <p>${e.history}</p>
// </div>`).join(''))


// bred_for: null
// breed_group: "Toy"
// country_code: "DE"
// country_codes: "DE"
// description: "Small, sturdy toy breed with a distinctive monkey-like expression and shaggy, wiry coat. Known for its confident, terrier-like personality despite its small size."
// height: {imperial: '9-11.5', metric: '23-29'}history: "Originating in 17th-century Germany, bred down from larger terriers to be skilled ratters in homes, kitchens and stables. Refined in Munich and Berlin, recognized by AKC in 1936. Name translates to 'monkey-like terrier'."
// id: "1"
// image: {id: '0LJiOVlxp', url: 'https://cdn2.thedogapi.com/images/0LJiOVlxp.jpg', width: 2048, height: 1880}
// life_span: "12-15"
// name: "Affenpinscher"
// origin: "Germany"perfect_for: nullreference_image_id: "0LJiOVlxp"species_id: "2"
// temperament: "Confident, alert, playful, loyal, courageous"venom_code: "13634"venom_name: "Affenpinscher"weight: {imperial: '7-10', metric: '3.2-4.5'}



// fetch(`https://api.thedogapi.com/v1/breeds?breed_groups=Toy`,{
//     method:'GET',
//     headers:{
//         'x-api-key':API_KEY,
//         'Content-Type':"application/json"
//     }
// })
// .then((r)=>r.json())
// .then((r)=>console.log(r)
// )




fetch("https://api.thedogapi.com/v1/breeds?breed_groups=Toy", {
    method: 'GET',
    headers: {
        'x-api-key': API_KEY,
        'Content-Type': "application/json"
    }
})
.then((r) => r.json())
.then((breeds) => {
    root.innerHTML = breeds.map((dog) => {
        // 1. Safe Image Check: Fallback to a placeholder if image or url is missing
        const imageUrl = dog.image && dog.image.url 
            ? dog.image.url 
            : 'https://placehold.co/300x200?text=No+Image+Available';

        // 2. Safe Text Check: Fallback if API fields are blank/undefined
        const breedGroup = dog.breed_group || "Companion Dog";
        const temperament = dog.temperament || "No temperament info available.";
        const lifeSpan = dog.life_span || "Unknown lifespan";

        return `
            <div class="card">
                <div class="photo"><img src="${imageUrl}" alt="${dog.name}/> </div>
              <div class="info">  <h3>${dog.name}</h3>
                <p><strong>Group:</strong> ${breedGroup}</p>
                <p><strong>Temperament:</strong> ${temperament}</p>
                <p><strong>Lifespan:</strong> ${lifeSpan}</p>
                </div>
            </div>
        `;
    }).join('');
})
.catch((error) => console.error("Something went wrong fetching the pups:", error));