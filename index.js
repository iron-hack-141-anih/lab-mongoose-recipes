const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Recipe.create({
//   // RECIPE 1
//   title: "Tofu Pho",
//   level: "Amateur Chef",
//   ingredients: [
//     "Water",
//     "Tofu",
//     "Love",
//     "Noodle",
//     "Viagra",
//     "3 tablespoons minced garlic",
//     "salt to taste",
//     "Vegan shit"
//   ],
//   cuisine: "Asian",
//   dishType: "Dish",
//   image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
//   duration: 400,
//   creator: "Chef Madarchod"
// })
//   .then(data => {
//     console.log("Recipe successfully created: ", data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Recipe.insertMany(data)
//   .then(data => {
//     console.log(data); // no documents returned
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
//   .then(data => {
//     console.log(data.title, "successfully updated");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Recipe.deleteOne({ title: "Carrot Cake" })
//   .then(data => {
//     console.log(data.title, "successfully deleted");
//   })
//   .catch(err => {
//     console.log(err);
//   });

mongoose.connection.close;
