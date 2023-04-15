$(document).ready(function () {
    for(i=0; i <= 5 ; i++){
    
        $.ajax({
                method: "GET",
                url: "https://www.themealdb.com/api/json/v1/1/random.php",
            }).done(function (objFood) {
               
            objFood.meals.forEach(food => {
              
                let option = new Option(food.strMeal.toUpperCase());
              
                $('#combo-food').append($(option));
            });
        });        
    };
  
    
});
