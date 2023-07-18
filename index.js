const axios = require('axios');

axios.get('https://openlibrary.org/search.json?author=tolkien&sort=new')
  .then(function ({ data }) {
    // handle success
    for (let i = 0; i < 99; i++) {
    console.log(data.docs[i].title);  }

    // return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[0].idMeal}`);
  })
//   .then(({ data })=>{
//     console.log(data.meals[0].strMeal);
//   })
  .catch(function (error) {
    // handle error
    console.log(Object.keys(error), error.message);
  })
  .finally(function () {
    console.log("finalicé");
    // always executed
  });

