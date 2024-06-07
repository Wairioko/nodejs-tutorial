
const obj1 = {
    name: "Munga"
};

// assign obj2 to obj1
const obj2 = obj1;

obj2.name = 'Charles';

// obj1 will be charles because in JS when we assign var to each other,
//  they share the memory location, change in one affect the other

console.log(obj1)

obj1.name = 'Wairioko'
console.log(obj2)




