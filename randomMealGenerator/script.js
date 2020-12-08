const get_meal_btn = document.getElementById("get_meal");
const meal_container = document.getElementById("meal");

get_meal_btn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  // fetch 20 ingredients from object
  for (let i = 1; i <= 20; i++) {
    if (meal[`strInstruction${i}`]) {
      ingredients.push(
        `${meal[`strInstruction${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  const newInnerHTML = `
  <div container>

        <div>
             <div class="card">
                 <img src="${meal.strMealThumb}" alt="Meal Image">
        </div>
                ${
                  meal.strCategory
                    ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
                    : ""
                }
                ${
                  meal.strArea
                    ? `<p><strong>Area:</strong> ${meal.strArea}</p>`
                    : ""
                }
                ${
                  meal.strTags
                    ? `<p><strong>Tags:</strong> ${meal.strTags
                        .split(",")
                        .join(",")}</p>`
                    : ""
                }
        <h3>Ingredients:</h3>
            <ul>
                 ${ingredients
                   .map((ingredient) => `<li>${ingredient}</li>`)
                   .join("")}
            </ul>



        <div>
            <h4>${meal.strMeal}</h4>
            <p>${meal.strInstructions}</p>
        </div>
        </div>

             ${
               meal.strYoutube
                 ? `
        <div class="youtube">
            <h4>Video Recipe</h4>
         <div class="videoWrapper">
            <iframe width="420" height="315"
                 src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                   -11
                 )}">
            </iframe>
        </div>
        </div>
        `
                 : ""
             }
</div>

`;
  meal_container.innerHTML = newInnerHTML;
};
