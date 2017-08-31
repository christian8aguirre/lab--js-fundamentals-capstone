/**
 * censorBadWords()
 *
 * Write a function called getCapitalLetters()that returns
 * It should remove bad words in its input sentence and replace them with ****.
 *
 *
**/


// PART 1: write a function called nicer().
var badWordsList = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']
var badWords2 = ['idiot',  'crap', 'freaking']

var censored1 = censorBadWords(badWords, "mom get the heck in here and bring me a darn sandwich"
var censored2 = censorBadWords(badWords, "here son, your crappy sandwich is on the dang plate")
var censored3 = censorBadWords(badWords2, "your freaking idiot dog left crap on my floor")

console.assert( censored1 === "mom get the **** in here and bring me a **** sandwich")
console.assert( censored2 === "here son, your **** sandwich is on the **** plate")
console.assert( censored3 === "your **** **** dog left **** on my floor")







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')
var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.assert( output_1.length === 8 )
console.assert( output_1[3] === 'S' )
console.assert( output_1[4] === 'M' )
//---------------------
console.assert( output_2.length === 7 )
console.assert( output_2[3] === 'R' )
console.assert( output_2[6] === 'X' )

//Explorer Mode: Make these tests pass
//---------------------
// var output_3 = getCapitalLetters('TLDR; My mother gave Nancy nothing for Xmas.')
// console.assert( output_2.length === 7 )
// console.assert( output_2[3] === 'R' )
// console.assert( output_2[6] === 'X' )
