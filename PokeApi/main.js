


function getPokemon(){
    let nombre = document.getElementById('input').value;

    const params = {
        method: 'GET',
        /* mode: 'cors', */
        headers: { 'Content-Type': 'application/json'}
    };    

    /* fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`, params) */
    fetch('https://pokeapi.co/api/v2/pokemon/'+ nombre, params)
        .then (res => res.json())
        .then (res => {
            console.log(res);           
            let img = res.sprites.other.dream_world.front_default;           
            document.getElementById("img").innerHTML = 	`<img src=${img} >`;
            document.getElementById("name").innerHTML = nombre.toUpperCase();
            let habilidades = [];
            for(let i = 0; i < res.abilities.length ; i++ ){
                console.log(res.abilities[i].ability.name); 
                habilidades.push(res.abilities[i].ability.name);
            }
            console.log(habilidades);           // para corroborar
            document.getElementById("abilities").innerHTML = habilidades;
            console.table(habilidades);         // para corroborar

        })
        .catch( err => console.log(err));

};
