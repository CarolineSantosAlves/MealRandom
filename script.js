let btnObter = document.getElementById('btnObter');
let containerReceita = document.getElementById('receita');

btnObter.addEventListener('click',() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        receita(data.meals[0]); //dentro do array de objetos só tem um elemento passo o [0]posição 0 para pegar esse unico elemento e poder acessar as propriedades dele mais facilmente, assim na função receita posso usar por exempo: meal.idMeal, sem passar o [0] teria que usar o meal[0].idMeal?
        console.log(data.meals[0])
        
    })
   
    

});

function receita(meal){
    let ingredientes = [];
    for(let i=1; i<=20; i++){
        if(meal[`strIngredient${i}`]){
           ingredientes.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
           
        }else{
            break;
        }
    }

    containerReceita.innerHTML = `<h2>${meal.strMeal}</h2>
   
    <img src="${meal.strMealThumb}"/> 
    
    <ul>
    INGREDIENTS:
    ${ingredientes.map(ingrediente =>
        `<li>${ingrediente}</li>`
    ).join('')}
    </ul>
    <h3>Category: ${meal.strCategory}</h3>
    <h3>Region: ${meal.strArea}</h3>
    <p>${meal.strInstructions}</p>
        <div class='videoReceita'><iframe width="560" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    
   
}