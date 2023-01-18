// "use strict"

//1 
const dailytemp = {
    sunday: 27,
    monday: 29,
    Tuesday: 17,
    Wednesday: 23
}
const keys = Object.keys(dailytemp);
console.log(keys);

//2
const dailytemp2 = {
    sunday: 27,
    monday: 29,
    tuesday: 17,
    wednesday: 23,
}
const keysUp = (obj) => {
    let new_obj = {} 
    // console.log(Object.entries(obj))
    for ([k,v] of Object.entries(obj)) {
        new_obj[k.toUpperCase()] = v 
    }
    return new_obj
}
console.log(keysUp(dailytemp2))

//3
const dailytemp3 = {
    sunday: 27,
    monday: 29,
    tuesday: 17,
    wednesday: 23,
}
const value = (obj) => {
    return Object.values(obj)
}
console.log(value(dailytemp3))

//4
const dailytemp4 = {
    sunday: 27,
    monday: 29,
    tuesday: 17,
    wednesday: 23,
}
const multiObj = (obj) => {
    let new_obj1 = {} 
    for (let[k,v] of Object.entries(obj)) {
    new_obj1[k] = v *2
    }
    return new_obj1
}   
console.log(multiObj(dailytemp4))

//5
const dailytemp5 = {
    sunday: 27,
    monday: 29,
    tuesday: 17,
    wednesday: 23,
}
const reverseObj = (obj) => {
    let new_obj2 = {} 
    for (let[k,v] of Object.entries(obj)) {
    new_obj2[k] = {v,k}
    }
    return new_obj2
}   
console.log(reverseObj(dailytemp5))

//6
const sumObj = (obj) => {
    let new_obj3 = {} 
    for (let[v] of Object.values(obj)) {
       const new_obj3 = sumObj.reduce((accumulator, currentValue) => accumulator + currentValue.x,
            0,
          ); 
          console.log(new_obj3)
    }
    return new_obj3
}   
console.log(sumObj(dailytemp5))