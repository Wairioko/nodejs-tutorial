// import superhero class
const superhero = require("./superhero");
// prints out the values passed in superhero file
console.log(superhero.get_name_city())

// now we change values to superman
superhero.set_name_city("Superman", "Metropolis/Formerly of Kandor")
const newSuperhero = superhero.get_name_city()
console.log(newSuperhero)

// module caching on display
// when we print, by getting superhero, we expect batman printed
// but since the object has been called and value we'll still get superman printed
// not the value initiated in index page

console.log(superhero.get_name_city())
