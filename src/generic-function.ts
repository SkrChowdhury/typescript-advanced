
// // Array Function

// const createArray = (param:string): string[] => {
// return [param]
// }

// //Generic for Arrow Function
// const createArray1 = <X,Y>(param1:X,param2:Y): [X,Y] => {
// return [param1,param2]
// }

// //Generic for Normal Function
// function createArray2 <X,Y>(param1:X,param2:Y): [X,Y] {
// return [param1,param2]
// }

// const result1 = createArray1<string, string>('Bangladesh','I Love my Country')
// const result2 = createArray1<boolean, string[]>(true,['USA'])

// type Name = {name:string}
// const result3 = createArray1<Name, boolean>({name: 'Bangladesh'}, true)


// //Spread Operator

// // const newData = {...myInfo,crush}

// const addMeInMyCrushMind =<T> (myInfo: T)=>{
//    const crush = 'Kate Winslet';
//    const newData = {...myInfo,crush}
//    return newData
// }


// const myInfo = {
//     name:'Sakkar',
//     age:100,
//     salary: 1000000
// }

// const result5 = addMeInMyCrushMind(myInfo)