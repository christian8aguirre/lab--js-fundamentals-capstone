/**
 * new User()
 *
 * (1) Create a User constructor function that creates new users.
 *      It should accept 2 string arguments: a name and a user-role.
 *      and create an object instance that has 3 properties:
 *      - name (string)
 *      - role (string -- value should be 'visitor', 'member', 'editor', 'admin')
 *      - createdAt should be a number with the value of Date.now()
 *
 *
 * (2) Create a method called `.hasPermissions()`
 *     on the prototype that accepts an array of roles.
 *
 *     The method should check to see if a given user
 *     has permissions -- should return true.
 *
**/


 //*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var simpleUser = new User('jill88', 'visitor')
var adminUser = new User('jack76', 'admin')
var contentCreatorList = ['editor', 'admin']

console.assert(simpleUser.name === 'jill88')
console.assert(simpleUser.role === 'visitor')
console.assert(typeof simpleUser.createdAt === 'number' )
console.assert(simpleUser.createdAt < Date.now() )
console.assert(simpleUser.hasPermissions(contentCreatorList) === false )

console.assert(adminUser.name === 'jack76')
console.assert(adminUser.role === 'admin')
console.assert(typeof adminUser.createdAt === 'number' )
console.assert(adminUser.createdAt < Date.now() )
console.assert(simpleUser.hasPermissions(contentCreatorList) === true )
