const foodLoad = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}

const displayFood = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ``
    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strIngredient1}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 80)}</p>
            </div>
        </div>
        `
        foodContainer.appendChild(div)
    });
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = ''
    foodLoad(searchText)
}
