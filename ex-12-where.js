 /**
  *  where()
  *
  * Write a function where() that takes two inputs, a list of objects and
  * a properties object. It should return a new list containing only those
  * objects that meet the key-value conditions in the properties object.
  *
  *
 **/

function where(list, objTarget) {
   var propertiesObjTarget = Object.keys(objTarget);
   var flag=[];
    var propiertiesList = [];
    var tempObj = {};
    var tempList = [];
    var finalArray = [];

    for (let k = 0; k < propertiesObjTarget.length; k++) { //Es la varible que me indicará si todos los elementos del objeto se encuentran en el principal
        flag.push(false);
    }

    for (let j = 0; j < list.length; j++) { //recorre cada elemento(fila) del array(matriz) a buscar
        propiertiesList = Object.keys(list[j]);
        tempList = list[j];
        flag = initialFlag(flag);
        for (let i = 0; i < propiertiesList.length; i++) { //recorre las propiedades del objeto en el elemento (fila) del array   
            tempObj = {};
            tempObj[propiertiesList[i]] = tempList[propiertiesList[i]];
            for (let x = 0; x < propertiesObjTarget.length; x++) { //Recorre y compara propied por propiedad entre el array principal y el que se va a buscar
                if (propertiesObjTarget[x] === propiertiesList[i] &&  objTarget[propertiesObjTarget[x]] === tempList[propiertiesList[i]]) {
                    flag[x]= true;       
                }   
            }
        }
        compareFlags(flag) ?  finalArray.push(list[j]): "" ; //Si todas las flags son true, agregalo al finalArray
    }
    return finalArray;
}


function initialFlag(array) { //Reinicializa el array flag
    for(i = 0; i < array.length; i++){
        array[i]=false;
        }
    return array;
}

function compareFlags(array){ //Hace la comparación de los resultados de la búsqueda
    switch (array.length) {
        case 1:
        return array[0]
            break;
        case 2:
        return array[0] && array[1]
        break
        case 3:
        return array[0] && array[1] && array[2]
        break;
        default:
        return false;
            break;
    }
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

 var plays = [
     { title: "Cymbeline", author: "Shakespeare", year: 1623 },
     { title: "The Tempest", author: "Shakespeare", year: 1623 },
     { title: "Hamlet", author: "Shakespeare", year: 1603 },
     { title: "The Maid in the Mill", author: "Fletcher", year: 1623 },
     { title: "A Streetcar Named Desire", author: "Williams", year: 1947 },
     { title: "King Lear", author: "Shakespeare", year: 1608 },
     { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
     { title: "Macbeth", author: "Shakespeare", year: 1623 },
     { title: "King Lear", author: "Shakespeare", year: 1608 },
     { title: "Glass Menagerie", author: "Williams", year: 1944 },
     { title: "The Misunderstanding", author: "Camus", year: 1944 },
     { title: "The Just Assassins", author: "Camus", year: 1949 },
     { title: "Pericles", author: "Shakespeare", year: 1609 },
     { title: "Caligula", author: "Camus", year: 1944 },
     { title: "Taming of the Shrew", author: "Shakespeare", year: 1623 },
     { title: "Death of a Salesman", author: "Miller", year: 1949 },
 ]

 var sh8sprQuery = where(plays, {author: "Shakespeare"})
 console.log("[1] Should return true");
 console.assert( sh8sprQuery instanceof Array )
 console.log("==================================================");
 console.log();

 console.log("[2] Should return a length of 9");
 console.assert( sh8sprQuery.length === 9 )
 console.log("==================================================");
 console.log();

 console.log("[3] Should return 'Cymbeline' for [0]['title']");
 console.assert( sh8sprQuery[0]['title'] === "Cymbeline" )
 console.log("==================================================");
 console.log();

 var sh8sprQuery2 = where(plays, {year: 1611})
 console.log("[4] Should return a length of 0");
 console.assert( sh8sprQuery2.length === 0 )
 console.log("==================================================");
 console.log();

 var midCentPlays = where(plays, {year: 1944})
 console.log("[5] Should return a length of 3");
 console.assert( midCentPlays.length === 3 )
 console.log("==================================================");
 console.log();

 var sh8sprQuery3 = where(plays, {author: "Shakespeare", year: 1623})
 console.log("[6] Should return a length of 4");
 console.assert( sh8sprQuery3.length === 4 )
 console.log("==================================================");
 console.log();

 var sh8sprQuery3 = where(plays, {author: "Camus", year: 1944})
 console.log("[7] Should return a length of 2");
 console.assert( sh8sprQuery3.length === 2 )
 console.log("==================================================");
 console.log();
