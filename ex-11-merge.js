/**
 *  merge()
 *
 *  Write a function called `merge()` that takes two objects and
 *  returns a new object with their combined properties & values.
 *
 *  If the two objects have the same property, make sure that you
 *  return the property-values from the object in the 2nd argument.
 *
**/









//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var merged = merge(obj1, obj2)

console.assert(merged.name === "Shaman Tilroy")
console.assert(merged.age === 33)
console.assert(merged.id === 6288)
console.assert(merged.balance === 38832)
console.assert(merged.accountActive === true)


// -------------------------------
var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
var obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var merged2 = merge(obj3, obj4)

console.assert( merged2.artist === "The Riverboat" )
console.assert( merged2.released === 1980 )
console.assert( merged2.title === "How to Wear a Bowtie")
console.assert( merged2.quantity === 10 )
