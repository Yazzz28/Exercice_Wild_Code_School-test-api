fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("id").innerHTML = data.id;
    document.getElementById("height").innerHTML = data.height;
    document.getElementById("weight").innerHTML = data.weight;
    document.getElementById("type").innerHTML = data.types[0].type.name;
    document.getElementById("image").src = data.sprites.front_default;
    document.getElementById("image").alt = data.name;
})
.catch(err => console.log(err));
