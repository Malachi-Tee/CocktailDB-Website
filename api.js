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
    document.getElementById('ingredients').textContent = data.drinks[0].strIngredient1
  })
  .catch(err => {
    console.log(`error ${err}`)
    document.getElementById('drinkName').textContent = 'That isnt in the data base'
    return

  })
}


function test(){
  console.log('tests works')
}

function randomCocktail (){ 
  let ings = []
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.getElementById('drinkName').textContent = data.drinks[0].strDrink
      console.log(data.drinks.keys(),'test')
      for (const key in data.drinks[0]) {
        if(data.drinks[0][key] !== null){
          if(key.startsWith('strIng')){
            ings.push(data.drinks[0][key])
          }
          console.log(`${key} and ${data.drinks[0][key]}`)
        }
      }
      console.log(ings)
      let ingList = document.getElementById('ingUL')
      ings.forEach( x => {
        let li = document.createElement("li")
        li.innerText = x
        ingList.appendChild(li)
      })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}

// www.thecocktaildb.com/api/json/v1/1/search.php?s=