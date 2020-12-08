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
};


