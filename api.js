document.getElementById('random').addEventListener('click', randomCocktail)
document.getElementById('drinkSearchBtn').addEventListener('click', searchCocktail)

function searchCocktail (){
  let drink = document.getElementById('drinkSearch').value
  if(drink.length === 0){
    document.getElementById('drinkName').textContent = 'Thers is nothing in the data field'
    return
  }
  drink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink
  console.log(drink)
  fetch(drink)
  .then(res => res.json())
  .then(data => {
    console.log(data.drinks[0])
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.getElementById('drinkName').textContent = data.drinks[0].strDrink
  })
}


function test(){
  console.log('tests works')
}

function randomCocktail (){ 
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.getElementById('drinkName').textContent = data.drinks[0].strDrink
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}

// www.thecocktaildb.com/api/json/v1/1/search.php?s=